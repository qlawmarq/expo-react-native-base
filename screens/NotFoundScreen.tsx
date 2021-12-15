import * as React from "react"
import { useNavigation } from '@react-navigation/native';
import { DefaultLayout } from '../layout/Default'
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
export default function SigninScreen(){
  const navigation = useNavigation();
  const onPressSigninLink = async () => {
    navigation.navigate('Signin')
  }
  return (
    <DefaultLayout>
      <Box safeArea p="2" py="8" w="90%">
        <Heading>
          404 NOT FOUND.
        </Heading>
        <HStack mt="6" justifyContent="center">
          <Link
            onPress={onPressSigninLink}
          >
            Sign in
          </Link>
        </HStack>
      </Box>
    </DefaultLayout>
  )
}
