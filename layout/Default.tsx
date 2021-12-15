import React from "react"
import { Center } from "native-base"
export const DefaultLayout: React.FC = (props) =>{
  return (
    <Center
      width="100%"
      height="100%"
      _dark={{
        backgroundColor: "dark.background",
      }}
      _light={{
        backgroundColor: "light.background",
      }}
    >   
        {props.children}
    </Center>
  )
}
