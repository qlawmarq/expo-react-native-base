import * as React from 'react';

// api
import { ApiService } from '../../lib/axios';

//components
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
  Checkbox,
  Spacer,
} from 'native-base';

//redux
import { useDispatch, useSelector } from 'react-redux';
import {
  setUser,
  setToken,
  setLoginEmail,
} from '../../lib/redux/reducers/authReducer';
import { RootState } from '../../lib/redux/store';

// navigation
import { RootStackParamList } from '../../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Signin'>;

export default function SigninScreen(props: Props) {
  const dispatch = useDispatch();
  const { loginInfo } = useSelector((state: RootState) => state.auth);
  const [email, onChangeEmail] = React.useState(loginInfo?.email);
  const [password, onChangePassword] = React.useState(loginInfo?.password);
  const [rememberMe, setRememberMe] = React.useState(!!loginInfo?.email);
  const onPressSigninButton = async () => {
    try {
      const values = {
        email,
        password,
      };
      const res = await ApiService.signin(values);
      dispatch(setUser(res.data.user));
      dispatch(setToken(res.data.token));
      if (rememberMe) {
        dispatch(
          setLoginEmail({
            email: email,
            password: password,
          })
        );
      }
      props.navigation.navigate('List');
    } catch (error) {
      console.warn(error);
    }
  };
  const onPressSignupLink = async () => {
    props.navigation.navigate('Signup');
  };
  return (
    <Center width="100%">
      <Box safeArea p="2" py="8" w="90%">
        <Heading>Welcome</Heading>
        <Column space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input value={email} onChangeText={onChangeEmail} type="text" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              value={password}
              onChangeText={onChangePassword}
              type="password"
            />
          </FormControl>
          <Row space={3} width="100%">
            <Checkbox value="" isChecked={rememberMe} onChange={setRememberMe}>
              Remember me
            </Checkbox>
            <Spacer />
            <Link href={'https://your.app.web/forgot-password'} isExternal>
              Forget Password?
            </Link>
          </Row>
          <Button onPress={onPressSigninButton} mt="2">
            Sign in
          </Button>
          <Row mt="6" justifyContent="center">
            <Text>I&apos;m a new user. </Text>
            <Link onPress={onPressSignupLink}>Sign Up</Link>
          </Row>
        </Column>
      </Box>
    </Center>
  );
}
