```js
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const EditTask = ({ task, index, setIsEditable, setAllTasks }) => {
  const [inp, setInp] = useState(task);
  const handleSave = () => {
    console.log(inp);
    setAllTasks((prev) => prev.map((t, i) => (i === index ? inp : t)));
    setIsEditable(false);
  };

  return (
    <View style={styles.singleTaskContainer}>
      <TextInput
        style={styles.input}
        value={inp}
        onChangeText={(t) => setInp(t)}
        placeholder="Enter task name"
      />
      <TouchableOpacity style={styles.btn} onPress={() => handleSave(index)}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditTask;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  input: {
    flex: 1,
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
