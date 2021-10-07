import React from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from './Footer.styles';

const Footer = ({newTitle, setNewTitle, addNewTodo}) => {
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.inputText}
                value={newTitle}
                placeholder="To do.."
                onChangeText={text => setNewTitle(text)}
            />
            <TouchableOpacity style={styles.button} onPress={() => addNewTodo(newTitle)}>
                <Text style={styles.button_text}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Footer;