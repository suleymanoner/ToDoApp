import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        justifyContent: "space-between",
        padding: 15,
        margin: 6,
        backgroundColor: '#7DA453',
        borderRadius: 7,
        flexDirection: "row"
    },
    completed_container: {
        padding: 15,
        margin: 6,
        borderRadius: 7,
        backgroundColor: '#86888A',
      },
      text: {
        fontSize: 18,
        color: '#fff',
      },
      completed_text: {
        fontSize: 18,
        color: "white",
        alignItems: "center",
        textDecorationLine: 'line-through',
      },
      delete_button: {
          backgroundColor: '#FFA500',
          borderRadius: 5,
      },
      delete_text : {
          fontSize: 15,
          color: "#fff",
          textAlign: "center",
          margin: 5
      }
});