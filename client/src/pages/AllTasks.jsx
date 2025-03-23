import { toast } from 'react-toastify';
import { TasksContainer, SearchContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';
import { useQuery } from '@tanstack/react-query';

const allTasksQuery = (params) => {
  const { search, taskStatus, taskType, sort, page } = params;
  return {
    queryKey: [
      'tasks',
      search ?? '',
      taskStatus ?? 'all',
      taskType ?? 'all',
      sort ?? 'newest',
      page ?? 1,
    ],
    queryFn: async () => {
      const { data } = await customFetch.get('/tasks', {
        params,
      });
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    await queryClient.ensureQueryData(allTasksQuery(params));
    return { searchValues: { ...params } };
  };

const AllTasksContext = createContext();
const AllTasks = () => {
  const { searchValues } = useLoaderData();
  const { data } = useQuery(allTasksQuery(searchValues));
  return (
    <AllTasksContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <TasksContainer />
    </AllTasksContext.Provider>
  );
};

export const useAllTasksContext = () => useContext(AllTasksContext);

export default AllTasks;
