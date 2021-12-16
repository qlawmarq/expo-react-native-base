import React, { useState, useCallback, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Box,
  FlatList,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Pressable
} from "native-base"
import { DefaultLayout } from '../../layout/Default'
import { data } from './mockdata'

//redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/store'

export default function ListScreen() {
    const { user } = useSelector((state: RootState) => state.auth);
    console.log(user)
    const [lists, setLists] = useState<any[]>([]);
    const navigation = useNavigation()
    const route = useRoute()
    useEffect(() => {
        setLists(data)
      }, [])
    const onPressListItem = async (item) => {
        navigation.navigate('Detail', {
        screen: 'Profile',
        params: item,
        });
    }
    return (
        <DefaultLayout>
            <Box
            w="100%"
            >
                <FlatList
                    data={lists}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => onPressListItem(item)}>
                            <Box
                                borderBottomWidth="1"
                                _light={{
                                    borderColor: "light.border"
                                }}
                                _dark={{
                                    borderColor: "dark.border"
                                }}
                                pl="4"
                                pr="5"
                                py="2"
                            >
                                <HStack space={3} justifyContent="space-between">
                                <Avatar
                                    size="48px"
                                    source={{
                                    uri: item.avatarUrl
                                    }}
                                />
                                <VStack>
                                    <Text bold>
                                    {item.fullName}
                                    </Text>
                                    <Text>
                                    {item.message}
                                    </Text>
                                </VStack>
                                <Spacer />
                                <Text
                                    fontSize="xs"
                                    alignSelf="flex-start"
                                >
                                    {item.date}
                                </Text>
                                </HStack>
                            </Box>
                        </Pressable>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </Box>
        </DefaultLayout>
    )
}

