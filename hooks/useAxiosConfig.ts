import { apiClient } from '../lib/axios';
import * as React from 'react';
import { useToast } from 'native-base';
// redux
import { useDispatch } from 'react-redux';
import { setUser, setToken } from '../lib/redux/reducers/authReducer';

export default function usePusherNotification() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const toast = useToast();
  const dispatch = useDispatch();
  React.useEffect(() => {
    const initActionOfTokenExpired = () => {
      apiClient.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          dispatch(setUser(undefined));
          dispatch(setToken(undefined));
          toast.show({
            title: 'Error',
            placement: 'top',
            description: String(error),
          });
          return error;
        }
      );
      setLoadingComplete(true);
    };
    initActionOfTokenExpired();
  }, []);

  return isLoadingComplete;
}
