import Task from '../models/TaskModel.js';
import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import day from 'dayjs';

export const getAllTasks = async (req, res) => {
  const { search, taskStatus, taskType, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  if (search) {
    queryObject.$or = [
      { title: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } },
    ];
  }

  if (taskStatus && taskStatus !== 'all') {
    queryObject.taskStatus = taskStatus;
  }
  if (taskType && taskType !== 'all') {
    queryObject.taskType = taskType;
  }

  const sortOptions = {
    newest: '-createdAt',
    oldest: 'createdAt',
    'a-z': 'title',
    'z-a': '-title',
  };

  const sortKey = sortOptions[sort] || sortOptions.newest;

  // setup pagination

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const tasks = await Task.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);

  const totalTasks = await Task.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalTasks / limit);
  res
    .status(StatusCodes.OK)
    .json({ totalTasks, numOfPages, currentPage: page, tasks });
};

export const createTask = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const task = await Task.create(req.body);
  res.status(StatusCodes.CREATED).json({ task });
};

export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.status(StatusCodes.OK).json({ task });
};

export const updateTask = async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(StatusCodes.OK).json({ msg: 'task modified', task: updatedTask });
};

export const deleteTask = async (req, res) => {
  const removedTask = await Task.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: 'task deleted', task: removedTask });
};

export const showStats = async (req, res) => {
  let stats = await Task.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$taskStatus', count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    working: stats.working || 0,
    done: stats.done || 0,
  };

  let monthlyApplications = await Task.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } },
    { $limit: 6 },
  ]);

  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;

      const date = day()
        .month(month - 1)
        .year(year)
        .format('MMM YY');

      return { date, count };
    })
    .reverse();

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};
