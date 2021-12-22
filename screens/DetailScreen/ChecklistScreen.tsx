import React from "react"
import {
  Input,
  IconButton,
  Checkbox,
  Text,
  Box,
  Column,
  Row,
  Heading,
  Icon,
} from "native-base"
import { Feather, Entypo } from "@expo/vector-icons"
import { checklistData } from './mockdata'

export default function ChecklistScreen(){

  const [list, setList] = React.useState(checklistData)
  const [inputValue, setInputValue] = React.useState("")

  const addItem = (title: string) => {
    setList([
      ...list,
      {
        title: title,
        isCompleted: false,
      },
    ])
  }

  const handleDelete = (index: number) => {
    const temp = list.filter((_, itemI) => itemI !== index)
    setList(temp)
  }

  const handleStatusChange = (index: number) => {
    const temp = list.map((item, itemI) =>
      itemI !== index ? item : { ...item, isCompleted: !item.isCompleted }
    )
    setList(temp)
  }

  return (
    <Box p={6}>
      <Heading mb="5">Checklist</Heading>
      <Column space={4}>
        <Row space={2}>
          <Input
            flex={1}
            onChangeText={(v) => setInputValue(v)}
            value={inputValue}
            placeholder="Add Task"
          />
          <IconButton
            borderRadius="sm"
            variant="solid"
            icon={
              <Icon as={Feather} name="plus" size="sm" color="warmGray.50" />
            }
            onPress={() => {
              addItem(inputValue)
              setInputValue("")
            }}
          />
        </Row>
        <Column space={2}>
          {list.map((item, itemI) => (
            <Row
              w="100%"
              justifyContent="space-between"
              alignItems="center"
              key={item.title + itemI.toString()}
            >
              <Checkbox
                isChecked={item.isCompleted}
                onChange={() => handleStatusChange(itemI)}
                value={item.title}
              >
                <Text
                  mx="2"
                  strikeThrough={item.isCompleted}
                  _light={{
                    color: item.isCompleted ? "gray.400" : "coolGray.800",
                  }}
                  _dark={{
                    color: item.isCompleted ? "gray.400" : "coolGray.50",
                  }}
                >
                  {item.title}
                </Text>
              </Checkbox>
              <IconButton
                size="sm"
                icon={
                  <Icon
                    as={Entypo}
                    name="minus"
                    size="xs"
                  />
                }
                onPress={() => handleDelete(itemI)}
              />
            </Row>
          ))}
        </Column>
      </Column>
    </Box>
  )
}
