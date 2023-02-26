```js
import { View, Text } from "react-native";
import React, { useState } from "react";
import ShowTask from "./ShowTask";
import EditTask from "./EditTask";
const SingleTask = ({ t, index, setAllTasks }) => {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <>
      {isEditable ? (
        <EditTask
          index={index}
          task={t}
          setIsEditable={setIsEditable}
          setAllTasks={setAllTasks}
        />
      ) : (
        <ShowTask
          t={t}
          index={index}
          setIsEditable={setIsEditable}
          setAllTasks={setAllTasks}
        />
      )}
    </>
  );
};

export default SingleTask;
```
