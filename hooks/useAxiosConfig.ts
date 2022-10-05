import { apiClient } from '../lib/axios';
import { useToast } from 'native-base';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setToken } from '../lib/redux/reducers/authReducer';
import { RootState } from '../lib/redux/store';
import { useEffect, useState } from 'react';

export default function usePusherNotification() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const { token } = useSelector((state: RootState) => state.auth);
  const toast = useToast();
  const dispatch = useDispatch();
  useEffect(() => {
    const initActionOfTokenExpired = () => {
      // Set auth token
      apiClient.interceptors.request.use((config) => {
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token.access_token}`;
        }
        return config;
      });
      apiClient.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          // If API return 401 not authorized error, then sign-out
          if (error?.response.status == 401) {
            dispatch(setUser(undefined));
            dispatch(setToken(undefined));
            toast.show({
              title: 'Error',
              placement: 'top',
              description: String(error),
            });
          }
          return error;
        }
      );
      setLoadingComplete(true);
    };
    initActionOfTokenExpired();
  }, []);

  return isLoadingComplete;
}
