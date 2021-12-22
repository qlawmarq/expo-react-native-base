import React, { useState, useCallback, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Box,
  FlatList,
  Avatar,
  Row,
  Column,
  Text,
  Spacer,
  Pressable,
  Center
} from "native-base"
import { data } from './mockdata'

//redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/store'

export default function ListScreen() {
    const { user } = useSelector((state: RootState) => state.auth);
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
        <Center
            width="100%"
            height="container"
        >
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
                                <Row space={3} justifyContent="space-between">
                                <Avatar
                                    size="48px"
                                    source={{
                                    uri: item.avatarUrl
                                    }}
                                />
                                <Column>
                                    <Text bold>
                                    {item.fullName}
                                    </Text>
                                    <Text>
                                    {item.message}
                                    </Text>
                                </Column>
                                <Spacer />
                                <Text
                                    fontSize="xs"
                                    alignSelf="flex-start"
                                >
                                    {item.date}
                                </Text>
                                </Row>
                            </Box>
                        </Pressable>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </Box>
        </Center>
    )
}

