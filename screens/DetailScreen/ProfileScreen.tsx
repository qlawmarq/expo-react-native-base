import React from "react"
import { useRoute } from '@react-navigation/native';
import {
  Input,
  IconButton,
  Checkbox,
  Text,
  Box,
  VStack,
  HStack,
  Stack,
  Heading,
  Icon,
  Image,
  AspectRatio,
  Center,
  Avatar
} from "native-base"
export default function ProfileScreen(){
  const route = useRoute()
  const params: any = route?.params;
  return (
    <Center p="6">
        <Avatar source={params?.avatarUrl} size="xl" />
        <Stack space="2" h="2/4">
          <Text color="gray.400">{params?.date}</Text>
          <Heading>
            {params?.fullName}
          </Heading>
          <Text>
            {params?.message}
          </Text>
        </Stack>
    </Center>
  )
}
