import React, {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet, Alert} from "react-native";
import ToDo from "./components/ToDo";
import Footer from './components/Footer';
import Header from "./components/Header";


const App = () => {

  const [newTitle, setNewTitle] = useState("");
  const [counter, setCounter] = useState(0);
  const [todoList, setTodoList] = useState([]);

  const getNotCompletedTodos = tasks => {
    const notCompletedTodos = tasks.filter(task => task.completed === false);
    setCounter(notCompletedTodos.length);
  };

  useEffect(() => {
    getNotCompletedTodos(todoList);
  }, [todoList]);

  const addNew = (title) => {
    setTodoList([...todoList, {id: Date.now(), title: title, completed: false}]);
    setNewTitle("");
  };

  const touchHandler = id => {
    setTodoList(
      todoList.map(todo => todo.id == id ? {...todo, completed: !todo.completed} : {...todo})
    );
  };

  const deleteHandler = id => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  return(
    <SafeAreaView style={styles.container}>
        <Header counter={counter}/>
        <ToDo
            todoList={todoList}
            touchHandler={touchHandler}
            deleteHandler={deleteHandler}
        />
        <Footer
            newTitle={newTitle}
            setNewTitle={setNewTitle}
            addNewTodo={addNew}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
    justifyContent: 'space-between',
  }
});


export default App;