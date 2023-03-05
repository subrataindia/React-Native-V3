[npm package](https://www.npmjs.com/package/react-native-vector-icons)
[search for icon](https://oblador.github.io/react-native-vector-icons/)

```js
import {useState} from 'react';
import {View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
const App = () => {
  return (
    <View>
      <FontAwesome name="user" size={50} color="red" />
      <FontAwesome name="users" size={50} color="red" />
      <Entypo name="add-user" size={50} color="red" />
      <FontAwesome name="user" />
    </View>
  );
};
export default App;

```
