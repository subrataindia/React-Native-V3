```js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ShowTask = ({ t, index, setIsEditable, setAllTasks }) => {
  const handleDelete = (i) => {
    setAllTasks((prev) => [...prev.filter((item, index) => index !== i)]);
    console.log(i);
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  return (
    <View style={styles.singleTaskContainer} key={index}>
      <Text style={styles.singleTask}>{t}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => handleEdit()}>
        <Text style={styles.btnText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => handleDelete(index)}>
        <Text style={styles.btnText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShowTask;

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
