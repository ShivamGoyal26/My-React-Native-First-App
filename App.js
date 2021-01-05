
import React, { useState } from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);


  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);

  }

  const addGoalHandler = () => {
    console.log(enteredGoal);
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer} >
        <TextInput placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View >

      </View>
      {courseGoals.map((goal) =>
        <View key={goal} style={styles.listItem}>
          <Text
          >
            {goal}
          </Text>
        </View>)}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  input: {
    width: '80%',
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
  }
});


