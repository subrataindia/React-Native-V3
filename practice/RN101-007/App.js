```js
import React, {useState} from 'react'
import {TextInput, Text, View, TouchableOpacity, StyleSheet} from 'react-native'
const App = () => {
  const [task, setTask] = useState('')

  const setInput = (t) => {
    console.log(t);
    setTask(t)
  }

  const handleAdd = () => {
    console.log(task)
  }  

  return(<View>
    <Text style={styles.title}>Task List App</Text>
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input}
        value={task}
        onChangeText={(t)=>setInput(t)}
        keyboardType="numeric"
        placeholder = "Enter task name"
        numberOfLines={4}
        multiline
        maxLength={10}
      />
      <TouchableOpacity style={styles.btn}
      onPress = {() => handleAdd()}
      >
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
    </View>
  </View>)
}

export default App;

const styles = StyleSheet.create({
  title : {
    fontSize:30,
    textAlign:'center'
  },
  input : {
    flex:1,
    borderWidth: 0.5,
    borderRadius: 5,
    padding:5
  },
  btn :{
    backgroundColor: 'rgb(0, 153, 255)',
    padding:5,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  },
  btnText : {
    color:'#FFF'
  },
  inputContainer : {
    flexDirection:'row'
  }
})
```
