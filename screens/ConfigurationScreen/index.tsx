import * as React from "react"
import { useNavigation } from '@react-navigation/native';
import { ApiService } from '../../lib/axios'
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
  Center
} from "native-base"
export default function SignupScreen(){
  const [email, onChangeEmail] = React.useState("");
  const [firstName, onChangeFirstName] = React.useState("");
  const [lastName, onChangeLastName] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const navigation = useNavigation();
  const onPressSignup = async () => {
    // const values = {
    //   email,
    //   password,
    //   firstName,
    //   lastName
    // }
    // const res = await ApiService.updateUser(values)
    // console.log(res)
    navigation.navigate('List')
  }
  return (
    <Center
      width="100%"
    >
      <Box safeArea p="2" py="8" w="90%">
        <Heading>
          Update your account
        </Heading>
        <Column space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input value={email} onChangeText={onChangeEmail} type="email"/>
          </FormControl>
          <FormControl>
            <FormControl.Label>First Name</FormControl.Label>
            <Input value={firstName} onChangeText={onChangeFirstName}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Last Name</FormControl.Label>
            <Input value={lastName} onChangeText={onChangeLastName}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input value={password} onChangeText={onChangePassword} type="password" />
          </FormControl>
          <Button onPress={onPressSignup} mt="2">
            Update
          </Button>
        </Column>
      </Box>
    </Center>
  )
}
