import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {addTask} from "../app/taskSlice"
import { useEffect } from 'react';


const fetchData = async () => {
  const response = await axios.get('http://localhost:3000/api/tasks');
  return response.data;
};

function usePolling() {
  const dispatch = useDispatch();
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['Data'], // The unique query identifier
    queryFn: fetchData,
    refetchInterval: 10000,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: true,
    retry: 3,
    // retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    // onError: (error) => {
    //   console.error('Polling error:', error);
    // },
  });


useEffect(() => {
    if (data) {
      dispatch(addTask(data));
      console.log(data);
    }
  }, [data, dispatch]);

  return { data, error, isLoading, isError };
}

export default usePolling;
