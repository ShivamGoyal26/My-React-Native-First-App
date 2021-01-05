
import React from 'react';
import { Button, StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  return (
    <View style= {{
      padding: 50
    }}>
      <View> 
<TextInput placeholder= "Course Goal" style={{borderBottomColor: "black", borderBottomWidth: 1}}
/>
<Button title= "ADD"></Button>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
