import {Button, TextInput, View, StyleSheet, Modal, Image} from "react-native";
import {useState} from "react";

function GoalItem(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>

                <Image style={styles.image} source={require('../assets/goal.png')}/>

                <TextInput
                    style={styles.textInput}
                    placeholder="Your Course Goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0"/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311B6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120432',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }
});
