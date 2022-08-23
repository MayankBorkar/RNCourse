import {useState} from "react";
import {StyleSheet, View, FlatList, Button} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar} from "expo-status-bar";

export default function App() {
    const [modalIsVisible,setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    function addGoalHandler(enteredGoalText) {
        setCourseGoals(currentCourseGoals => [...currentCourseGoals, {
            text: enteredGoalText,
            id: Math.random().toString()
        }
        ]);
        endAddGoalHandler();
    }

    function onDeleteGoalHandler(id) {
        setCourseGoals((currentCourseGoal) => {
            return currentCourseGoal.filter((goal) => goal.id !== id);
        });
    }

    function startAddGoalHandler(){
        setModalIsVisible(true);
    }

    function endAddGoalHandler() {
        setModalIsVisible(false);
    }

    return (
        <>
        <StatusBar style="light"/>
        <View style={styles.appContainer}>
         <Button title="Add New Goal"
                 color="#a065ec"
                 onPress={startAddGoalHandler}
         />
            <GoalInput visible={modalIsVisible}
                       onAddGoal={addGoalHandler}
                       onCancel={endAddGoalHandler}
            />

            <View style={styles.goalsContainer}>
                <FlatList data={courseGoals}
                          renderItem={(itemData) =>
                          {
                    return < GoalItem text={itemData.item.text}
                                      id={itemData.item.id}
                                      onDeleteItem={onDeleteGoalHandler}/>
                }}
                          keyExtractor={(item, index) =>
                          {
                              return item.id;
                          }}
                          alwaysBounceVertical={false}/>
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 16,
        backgroundColor: '#1e085a'
    },
    goalsContainer: {
        flex: 5,
    },

});
