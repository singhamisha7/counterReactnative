import { Button, Text, View, Pressable } from "react-native";
import React, { useState } from 'react'

export default function Counter() {
    const [first, setfirst] =useState(1);

  return (
    <View>
        <Text> This is my new Counter</Text>
        <Button title="Click Me" onPress={()=> setfirst(first+1)}/>
        <Text style ={{alignSelf:"center"}}>{first}</Text>
    </View>
  )
}
