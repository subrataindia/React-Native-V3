```js
import React, { useState } from "react";
import {
  ScrollView,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import EditTask from "./components/EditTask";
import ShowTask from "./components/ShowTask";
import SingleTask from "./components/SingleTask";

const App = () => {
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  const setInput = (t) => {
    console.log(t);
    setTask(t);
  };

  const handleAdd = () => {
    console.log(task);
    if (task.length > 0) {
      setAllTasks((prev) => [...prev, task]);
      setTask("");
      //console.log(allTasks);
    }
  };

  return (
    <View style={{ marginTop: 25 }}>
      <Text style={styles.title}>Task List App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={(t) => setInput(t)}
          placeholder="Enter task name"
        />
        <TouchableOpacity style={styles.btn} onPress={() => handleAdd()}>
          <Text style={styles.btnText}>Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {allTasks.map((t, index) => (
          <SingleTask
            t={t}
            key={index}
            index={index}
            setAllTasks={setAllTasks}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  input: {
    flex: 1,
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 5,
  },
  btn: {
    backgroundColor: "rgb(0, 153, 255)",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },
  btnText: {
    color: "#FFF",
  },
  inputContainer: {
    flexDirection: "row",
  },
  singleTask: {
    flex: 1,
  },
  singleTaskContainer: {
    padding: 5,
    flexDirection: "row",
    borderWidth: 0.5,
    borderRadius: 5,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
```
