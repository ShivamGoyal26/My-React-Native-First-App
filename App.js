
import React from 'react';
import { Button, View, TextInput} from 'react-native';

export default function App() {
  return (
    <View style= {{
      padding: 50,
    }}>
      <View style = {{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }} > 
<TextInput placeholder= "Course Goal" style={{
  width: '80%',  
  borderBottomColor: "black", 
  borderBottomWidth: 1,
  padding: 10
  }}
/>
<Button title= "ADD"></Button>
      </View>
      <View></View>
    </View>
  );
}


