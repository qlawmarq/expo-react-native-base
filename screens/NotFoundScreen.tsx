import * as React from "react"
import { useNavigation } from '@react-navigation/native';
import {
  Box,
  Heading,
  Link,
  Row,
  Center
} from "native-base"
export default function SigninScreen(){
  const navigation = useNavigation();
  const onPressSigninLink = async () => {
    navigation.navigate('Signin')
  }
  return (
    <Center
      width="100%"
    >
      <Box safeArea p="2" py="8" w="90%">
        <Heading>
          404 NOT FOUND.
        </Heading>
        <Row mt="6" justifyContent="center">
          <Link
            onPress={onPressSigninLink}
          >
            Sign in
          </Link>
        </Row>
      </Box>
    </Center>
  )
}
