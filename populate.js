import { readFile } from 'fs/promises';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import Task from './models/TaskModel.js';
import User from './models/UserModel.js';

try {
  await mongoose.connect(process.env.MONGO_URL);
  const user = await User.findOne({ email: 'john@gmail.com' });
  const jsonTasks = JSON.parse(
    await readFile(new URL('./utils/mockData.json', import.meta.url))
  );
  const tasks = jsonTasks.map((task) => {
    return { ...task, createdBy: user._id };
  });
  await Task.deleteMany({ createdBy: user._id });
  await Task.create(tasks);
  console.log('Success!!!');
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
