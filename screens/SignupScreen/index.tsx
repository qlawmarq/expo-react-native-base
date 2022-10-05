import * as React from 'react';
import { ApiService } from '../../lib/axios';
import { useToast } from 'native-base';
import {
  Box,
  Text,
  Heading,
  Column,
  FormControl,
  Input,
  Link,
  Button,
  Row,
  Center,
} from 'native-base';

// navigation
import { RootStackParamList } from '../../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

export const SignupScreen: React.FC<Props> = (props) => {
  const toast = useToast();
  const [email, onChangeEmail] = React.useState('');
  const [first_name, onChangeFirstName] = React.useState('');
  const [last_name, onChangeLastName] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const onPressSignup = async () => {
    const values = {
      email,
      password,
      first_name,
      last_name,
    };
    const res = await ApiService.signup(values);
    props.navigation.navigate('Signin');
    toast.show({
      description: 'Signed in successfully',
    });
  };
  const onPressSigninLink = async () => {
    props.navigation.navigate('Signin');
  };
  return (
    <Center width="100%">
      <Box safeArea p="2" py="8" w="90%">
        <Heading>Register your account</Heading>
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
          <Button onPress={onPressSignup} mt="2">
            Sign up
          </Button>
          <Row mt="6" justifyContent="center">
            <Text>Already have a account? </Text>
            <Link onPress={onPressSigninLink}>Sign in</Link>
          </Row>
        </Column>
      </Box>
    </Center>
  );
};
