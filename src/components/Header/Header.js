import React from "react";
import { View, Text } from "react-native";
import styles from './Header.styles';

const Header = ({counter}) => {
    return(
        <View style={styles.header}>
            <Text style={styles.header_text}>To Do</Text>
            <Text style={styles.header_text}>{counter}</Text>
        </View>
    );
};

export default Header;