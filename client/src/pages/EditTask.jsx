import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useLoaderData, useParams } from 'react-router-dom';
import { TASK_STATUS, TASK_TYPE } from '../../../utils/constants';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { useQuery } from '@tanstack/react-query';

const singleTaskQuery = (id) => {
  return {
    queryKey: ['task', id],
    queryFn: async () => {
      const { data } = await customFetch.get(`/tasks/${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    try {
      await queryClient.ensureQueryData(singleTaskQuery(params.id));
      return params.id;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return redirect('/dashboard/all-tasks');
    }
  };
export const action =
  (queryClient) =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.patch(`/tasks/${params.id}`, data);
      queryClient.invalidateQueries(['tasks']);

      toast.success('Task edited successfully');
      return redirect('/dashboard/all-tasks');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const EditTask = () => {
  const id = useLoaderData();

  const {
    data: { task },
  } = useQuery(singleTaskQuery(id));

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit task</h4>
        <div className="form-center">
          <FormRow type="text" name="title" defaultValue={task.title} />
          <FormRow
            type="text"
            name="description"
            defaultValue={task.description}
          />
          <FormRow
            type="text"
            name="taskLocation"
            labelText="task location"
            defaultValue={task.taskLocation}
          />
          <FormRowSelect
            name="taskStatus"
            labelText="task status"
            defaultValue={task.taskStatus}
            list={Object.values(TASK_STATUS)}
          />
          <FormRowSelect
            name="taskType"
            labelText="task priority"
            defaultValue={task.taskType}
            list={Object.values(TASK_TYPE)}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};
export default EditTask;
