import * as React from "react"
import {
  Box,
  Heading,
  Link,
  Row,
  Center
} from "native-base"
// navigation
import { RootStackParamList } from '../navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'NotFound'>;

export default function SigninScreen(props: Props){
  const onPressSigninLink = async () => {
    props.navigation.navigate('Signin')
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
