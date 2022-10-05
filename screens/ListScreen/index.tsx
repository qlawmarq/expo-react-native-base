import React, { useCallback, useState } from 'react';
import {
  Box,
  FlatList,
  Row,
  Column,
  Text,
  Pressable,
  Center,
  Icon,
  Heading,
} from 'native-base';

// navigation
import { RootStackParamList } from '../../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import { ApiService, UserModel } from '../../lib/axios';
import Feather from '@expo/vector-icons/build/Feather';

type Props = NativeStackScreenProps<RootStackParamList, 'List'>;

export const ListScreen: React.FC<Props> = () => {
  const [lists, setLists] = useState<UserModel[]>();
  const onPressListItem = async (item: UserModel) => {
    // TODO: do something
    // props.navigation.navigate('Detail', {
    //   screen: 'Profile',
    //   params: item,
    // });
    console.log(item);
  };
  const GetUsers = () => {
    ApiService.getUsers().then((e) => {
      console.log(e);
      setLists(e.data);
    });
  };

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      GetUsers();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );
  return (
    <Center width="100%">
      <Box w="100%">
        <FlatList
          data={lists}
          renderItem={({ item }) => (
            <Pressable onPress={() => onPressListItem(item)}>
              <Box
                borderBottomWidth="1"
                _light={{
                  borderColor: 'light.border',
                }}
                _dark={{
                  borderColor: 'dark.border',
                }}
                pl="4"
                pr="5"
                py="2"
              >
                <Row space={3} justifyContent="space-between">
                  <Column mr={1}>
                    <Row>
                      <Column justifyContent="center">
                        <Icon
                          as={Feather}
                          color="emerald.500"
                          name="user"
                          size="sm"
                          mr={3}
                        />
                      </Column>
                      <Column>
                        <Heading fontSize="sm">
                          Name: {item.first_name + ' ' + item.last_name}
                        </Heading>
                        <Text fontSize="xs">Email {item.email}</Text>
                      </Column>
                    </Row>
                  </Column>
                </Row>
              </Box>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
    </Center>
  );
};
