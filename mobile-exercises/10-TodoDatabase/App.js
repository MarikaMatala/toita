import React, { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
  TextInput,
  Button,
  ScrollView,
  Keyboard
} from 'react-native';

import Realm from 'realm'

const TaskSchema = {
  name: "Task",
  properties: {
    _id: "int",
    name: "string",
    status: "string?",
  },
  primaryKey: "_id",
};


const Banner = () => {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerText}>ToDo example with React Native</Text>
    </View>
  );
};

const ToDoList = () => {
  const [itemText, setItemText] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    readTasks();
  }, [])

  //read tasks from database
  const readTasks = async () => {
    const realm = await Realm.open({
      path: "myrealm",
      schema: [TaskSchema],
    });

    const allTasks = realm.objects("Task");
    console.log(`The lists of tasks are: ${allTasks.map((task) => {return task._id + " " + task.name + "\n" })}`);
    setTasks(allTasks)
  }

  //write to realm database
  const writeTask = async (value) => {  
    const realm = await Realm.open({
      path: "myrealm",
      schema: [TaskSchema],
    });

    realm.write(() => {
      task1 = realm.create("Task", {
        _id: value.id,
        name: value.text,
        status: "Open",
      });
    });
  }

  //delete from realm
  const removeTask = async (id) => {
    const realm = await Realm.open({
      path: "myrealm",
      schema: [TaskSchema],
    });

    realm.write(() => {
      let myTask = realm.objectForPrimaryKey("Task", id);
      realm.delete(myTask);
    });
  }

  const removeItem = (id) => {
    //remove from database
    removeTask(id);

    //remove from local list (no need to get from database)
    const newTasks = tasks.filter((task) => task._id !== id);
    setTasks(newTasks);

  }

  const addToDoItem = () => {
    if (itemText !== "") {
      const uniqueItemId = tasks.length + 1

      let newItem = {
        text: itemText,
        id: uniqueItemId
      }
      setTasks([...tasks, { id: uniqueItemId, text: itemText }]);

      writeTask(newItem);
      readTasks();
      setItemText("");
    }

    Keyboard.dismiss();

  };

  return (
    <View>
      <View style={styles.addToDo}>
        <TextInput
          style={styles.addToDoTextInput}
          value={itemText}
          onChangeText={(text) => setItemText(text)}
          placeholder="Write a new todo here"
        />
        <Button
          title="Add"
          style={styles.addTodoButton}
          onPress={addToDoItem}
        />
      </View>
      <ScrollView style={styles.list}>
        {tasks.map((task, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.listItemText}>* {task.name}</Text>
            <Text
              style={styles.listItemDelete}
              onPress={() => removeItem(task._id)}
            >
              X
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const App: () => Node = () => {

  return (
    <View style={styles.container}>
      <Banner />
      <ToDoList />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    margin: 5,
  },

  banner: {
    backgroundColor: "cadetblue",
    justifyContent: "center",
    marginBottom: 20,
  },

  bannerText: {
    color: "white",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },

  addToDo: {
    flexDirection: "row",
    marginBottom: 20,
  },

  addToDoTextInput: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ccc",
    padding: 5,
    margin: 2,
    flex: 1,
  },

  list: {
    color: "black",
    margin: 2,
  },

  listItem: {
    flex: 1,
    flexDirection: "row",
    margin: 5,
  },

  listItemDelete: {
    marginStart: 10,
    color: "red",
    fontWeight: "bold",
  },
});

export default App;
