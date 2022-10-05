import * as React from 'react';
import { ApiService } from '../../lib/axios';
import {
  Box,
  Heading,
  Column,
  FormControl,
  Input,
  Button,
  Center,
  useToast,
} from 'native-base';

// navigation
import { RootStackParamList } from '../../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/store';
import { useState } from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export const SettingsScreen: React.FC<Props> = (props) => {
  const toast = useToast();
  const { user } = useSelector((state: RootState) => state.auth);
  const [email, onChangeEmail] = useState(user?.email);
  const [first_name, onChangeFirstName] = useState(user?.first_name);
  const [last_name, onChangeLastName] = useState(user?.last_name);
  const [password, onChangePassword] = useState('');
  const onPressUpdate = async () => {
    if (email && password && first_name && last_name) {
      const values = {
        email,
        password,
        first_name,
        last_name,
      };
      ApiService.updateUser(values).then((res) => {
        console.log(res);
        props.navigation.navigate('List');
      });
    } else {
      toast.show({
        title: 'Warning',
        placement: 'top',
        description: 'Please fill all fields.',
      });
    }
  };
  return (
    <Center width="100%">
      <Box safeArea p="2" py="8" w="90%">
        <Heading>Update your account</Heading>
        <Column space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input value={email} onChangeText={onChangeEmail} type="text" />
          </FormControl>
          <FormControl>
            <FormControl.Label>First Name</FormControl.Label>
            <Input value={first_name} onChangeText={onChangeFirstName} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Last Name</FormControl.Label>
            <Input value={last_name} onChangeText={onChangeLastName} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              value={password}
              onChangeText={onChangePassword}
              type="password"
            />
          </FormControl>
          <Button onPress={onPressUpdate} mt="2">
            Update
          </Button>
        </Column>
      </Box>
    </Center>
  );
};
