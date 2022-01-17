import React, { useState, useEffect } from 'react';
import {
  GiftedChat,
  Send,
  SendProps,
  IMessage,
  Actions,
  ActionsProps,
} from 'react-native-gifted-chat';
import { Icon, Spinner } from 'native-base';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/store';

// mockdata
import { chatData } from './mockdata';

export default function ChatScreen() {
  // const { user, token } = useSelector((state: RootState) => state.auth);
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [imageUri, setImageUri] = useState('');

  const getChat = async () => {
    // call API to get chat here
    setMessages(chatData);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    // https://docs.expo.dev/versions/latest/sdk/imagepicker/
    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.cancelled && result?.base64) {
      console.log(result?.base64);
      setImageUri(result?.base64);
    }
  };

  const renderActions = (props: Readonly<ActionsProps>) => {
    return <Actions {...props} icon={() => <Icon as={Feather} name="image" size="sm" />} />;
  };
  const renderSend = (props: Readonly<SendProps<IMessage>>) => {
    if (isSending) {
      return <Spinner size="lg" />;
    }
    return (
      <Send
        {...props}
        containerStyle={{
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10,
        }}
      >
        <Icon as={Feather} name="send" size="sm" />
      </Send>
    );
  };

  const onSend = async (messages: IMessage[]) => {
    setIsSending(true);
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
    // call API to send message
    setIsSending(false);
  };

  useEffect(() => {
    getChat();
  }, []);

  return (
    <GiftedChat
      alwaysShowSend
      messages={messages}
      renderActions={renderActions}
      renderSend={renderSend}
      onPressActionButton={pickImage}
      onSend={(messages) => onSend(messages)}
      renderLoading={() => <Spinner size="lg" />}
      // set user id from API
      user={{
        _id: 1,
      }}
    />
  );
}
