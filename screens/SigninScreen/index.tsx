import * as React from "react"

//router
import { useNavigation } from '@react-navigation/native';

// api
import ApiService from '../../lib/axios/endpoints'

//components
import { DefaultLayout } from '../../layout/Default'
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
} from "native-base"

//redux
import { useDispatch } from 'react-redux';
import { setUser, setToken } from "../../lib/redux/slices/authSlice";

export default function SigninScreen(){
  const dispatch = useDispatch();
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const navigation = useNavigation();
  const onPressSigninButton = async () => {
    const values = {
      email,
      password
    }
    const res = await ApiService.signin(values)
    dispatch(setUser(res.data.user));
    dispatch(setToken(res.data.token));
    navigation.navigate('List')
  }
  const onPressSignupLink = async () => {
    navigation.navigate('Signup')
  }
  return (
    <DefaultLayout>
      <Box safeArea p="2" py="8" w="90%">
        <Heading>
          Welcome
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input value={email} onChangeText={onChangeEmail} type="email"/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input value={password} onChangeText={onChangePassword} type="password" />
            {/* <Link
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link> */}
          </FormControl>
          <Button onPress={onPressSigninButton} mt="2">
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text>
              I'm a new user.{" "}
            </Text>
            <Link
              onPress={onPressSignupLink}
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </DefaultLayout>
  )
}
