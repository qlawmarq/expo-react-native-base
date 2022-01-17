import * as React from 'react';
// import { ApiService } from '../../lib/axios';
import { Box, Heading, Column, FormControl, Input, Button, Center } from 'native-base';

// navigation
import { RootStackParamList } from '../../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export default function SettingsScreen(props: Props) {
  const [email, onChangeEmail] = React.useState('');
  const [firstName, onChangeFirstName] = React.useState('');
  const [lastName, onChangeLastName] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const onPressUpdate = async () => {
    // const values = {
    //   email,
    //   password,
    //   firstName,
    //   lastName
    // }
    // const res = await ApiService.updateUser(values)
    // console.log(res)
    props.navigation.navigate('List');
  };
  return (
    <Center width="100%">
      <Box safeArea p="2" py="8" w="90%">
        <Heading>Update your account</Heading>
        <Column space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input value={email} onChangeText={onChangeEmail} type="email" />
          </FormControl>
          <FormControl>
            <FormControl.Label>First Name</FormControl.Label>
            <Input value={firstName} onChangeText={onChangeFirstName} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Last Name</FormControl.Label>
            <Input value={lastName} onChangeText={onChangeLastName} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input value={password} onChangeText={onChangePassword} type="password" />
          </FormControl>
          <Button onPress={onPressUpdate} mt="2">
            Update
          </Button>
        </Column>
      </Box>
    </Center>
  );
}
