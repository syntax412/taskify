import { FormRow, FormRowSelect, SubmitBtn, FormRowArea } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { TASK_STATUS, TASK_TYPE } from '../../../utils/constants';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.post('/tasks', data);
      queryClient.invalidateQueries(['tasks']);
      toast.success('Task added successfully ');
      return redirect('all-tasks');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const AddTask = () => {
  const { user } = useOutletContext();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add task</h4>
        <div className="form-center">
          <FormRow type="text" name="title" />

          <FormRow
            type="text"
            labelText="task location"
            name="taskLocation"
            defaultValue={user.location}
          />
          <FormRowSelect
            labelText="task status"
            name="taskStatus"
            defaultValue={TASK_STATUS.PENDING}
            list={Object.values(TASK_STATUS)}
          />
          <FormRowSelect
            labelText="task priority"
            name="taskType"
            defaultValue={TASK_TYPE.FULL_TIME}
            list={Object.values(TASK_TYPE)}
          />
          <FormRowArea type="text" row="5" name="description" />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};
export default AddTask;
