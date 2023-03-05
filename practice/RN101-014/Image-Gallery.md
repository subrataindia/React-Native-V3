```js
import {useState} from 'react';
import {ScrollView, Image, TouchableOpacity} from 'react-native';

const App = () => {
  const [imgs, setImgs] = useState([
    'https://cdn.pixabay.com/photo/2023/01/27/06/17/pheasant-7747830_960_720.jpg',
    'https://cdn.pixabay.com/photo/2023/01/22/13/46/swans-7736415_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg',
    'https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg',
    'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg',
    'https://cdn.pixabay.com/photo/2023/01/27/06/17/pheasant-7747830_960_720.jpg',
    'https://cdn.pixabay.com/photo/2023/01/22/13/46/swans-7736415_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg',
  ]);

  const deleteImg = index => {
    setImgs(prev => prev.filter((x, i) => i !== index));
  };
  return (
    <ScrollView>
      {imgs.map((img, index) => (
        <TouchableOpacity onLongPress={() => deleteImg(index)}>
          <Image
            source={{
              uri: img,
            }}
            style={{width: '100%', height: 150}}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
export default App;

```
