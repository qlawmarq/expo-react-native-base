import * as React from "react"
import { useNavigation } from '@react-navigation/native';
import ApiService from '../../lib/api/endpoints'
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
import { background } from "native-base/lib/typescript/theme/styled-system";
export default function SigninScreen(){
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const navigation = useNavigation();
  const onPressSigninButton = async () => {
    // const values = {
    //   email,
    //   password
    // }
    // const res = await ApiService.signin(values)
    // localStorage.setItem('nuxt3_auth', JSON.stringify(res.data.token));
    // localStorage.setItem('nuxt3_user', JSON.stringify(res.data.user));
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
