import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { redirect } from 'react-router-dom';

export const action =
  (queryClient) =>
  async ({ params }) => {
    try {
      const { data } = await customFetch.get(`/tasks/${params.id}`);
      const oldTask = data.task;

      await customFetch.patch(`/tasks/${params.id}`, {
        ...oldTask,
        taskStatus: 'done',
      });

      queryClient.invalidateQueries(['tasks']);
      toast.success('Task marked as done');
    } catch (error) {
      toast.error(error?.response?.data?.msg || 'Something went wrong');
    }

    return redirect('/dashboard/all-tasks');
  };
