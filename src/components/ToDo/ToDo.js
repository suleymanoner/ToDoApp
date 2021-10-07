import React from "react";
import { Text, FlatList , TouchableOpacity, TouchableHighlight ,View , Button} from "react-native";
import styles from './ToDo.styles';

const ToDo = ({todoList, touchHandler, deleteHandler}) => {

    const render = ({item}) => (

        <TouchableOpacity
            onPress={() => touchHandler(item.id)}
            style={item.completed ? styles.completed_text : styles.container}>
                <View>
                    <Text style={item.completed ? styles.completed_text : styles.text}>
                        {item.title}
                    </Text>
                </View>
                <View>
                    <TouchableHighlight 
                        onPress={() => deleteHandler(item.id)} 
                        style={styles.delete_button}>
                        <Text style={styles.delete_text}>Del</Text>
                    </TouchableHighlight>
                </View>
        </TouchableOpacity>
    );

    return(
        <FlatList
            data={todoList}
            renderItem={render}
            keyExtractor={item => item.id.toString()}
        />
    );
};

export default ToDo;