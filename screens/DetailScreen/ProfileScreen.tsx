import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, Stack, Heading, Center, Avatar } from 'native-base';
export default function ProfileScreen() {
  const route = useRoute();
  const params: any = route?.params;
  return (
    <Center p="6">
      <Avatar source={params?.avatarUrl} size="xl" />
      <Stack space="2" h="2/4">
        <Text color="gray.400">{params?.date}</Text>
        <Heading>{params?.fullName}</Heading>
        <Text>{params?.message}</Text>
      </Stack>
    </Center>
  );
}
