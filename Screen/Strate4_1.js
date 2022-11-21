import { View, Text, Button, StyleSheet, TextInput,
    KeyboardAvoidingView, ScrollView,
    Platform, Keyboard, TouchableWithoutFeedback} from "react-native";
import {useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../Redux/Actions";


const Strate4_1 = (props) => {
    const scoreCounter = useSelector(state => state.scoreCounter) // 앱에서 어디든 
    const dispatch = useDispatch() // 액션 불러오기 면어
    //dispatch는 리듀서가 스토어의 상태를 업데이트하는 방법을 알려주는 작업을 전달하는 데 사용.

    var count1 = 3;
    var count2 = 3;
    var count3 = 3;
    var count4 = 3;
    const [show1, setShow1] = useState(false);              //2번째 화면 상태 값 default는 false로 동작
    const [show2, setShow2] = useState(false);              //3번째 화면 상태 값 default는 false로 동작
    const [show3, setShow3] = useState(false);              //4번째 화면 상태 값 default는 false로 동작
    const [myTextInput1, setMyTextInput1] = useState("")    //1번 답 저장 하는 공간
    const [myTextInput2, setMyTextInput2] = useState("")    //2번 답 저장 하는 공간
    const [myTextInput3, setMyTextInput3] = useState("")    //3번 답 저장 하는 공간
    const [myTextInput4, setMyTextInput4] = useState("")    //4번 답 저장 하는 공간
    const onChangeInput1 = (event) => {
        setMyTextInput1(event)
    }
    const onChangeInput2 = (event) => {
        setMyTextInput2(event)
    }
    const onChangeInput3 = (event) => {
        setMyTextInput3(event)
    }
    const onChangeInput4 = (event) => {
        setMyTextInput4(event)
    }
    const correct1 = () => {
        if (myTextInput1 == 11) {
            alert("next");
            setShow1(true)
        } else {
            if(count1 > 0) {
                count1 -= 1;
                alert("miss you have "+(count1)+" chance");
            }
            else if(count1 == 0) {
                alert("miss you have no chance")
                props.navigation.navigate("Quiz4")
            }
        }
    }
    const correct2 = () => {
        if (myTextInput2 == 11) {
            alert("next");
            setShow2(true)
        } else {
            if(count2 > 0) {
                count2 -= 1;
                alert("miss you have "+(count2)+" chance");
            }
            else if(count2 == 0) {
                alert("miss you have no chance")
                props.navigation.navigate("Quiz4")
            }
        }
    }
    const correct3 = () => {
        if (myTextInput3 == 11) {
            alert("next");
            setShow3(true)
        } else {
            if(count3 > 0) {
                count3 -= 1;
                alert("miss you have "+(count3)+" chance");
            }
            else if(count3 == 0) {
                alert("miss you have no chance")
                props.navigation.navigate("Quiz4")
            }
        }
    }
    const correct4 = () => {
        if (myTextInput2 == 11) {
            dispatch(increment()) //점수 추가 액션 불러오기
            alert("Ok! It looks like Faye scored the most.");
            props.navigation.navigate("Quiz4")
        } else {
            if(count4 > 0) {
                count4 -= 1;
                alert("miss you have "+(count4)+" chance");
            }
            else if(count4 == 0) {
                alert("miss you have no chance")
                props.navigation.navigate("Quiz4")
            }
        }
    }
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        > 
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style ={{width:"100%"}}>    
            <View style = {styles.container}>
                <View style = {styles.textcon}>
                <Text style = {styles.text}>Ok, you want to guess-and-check. 
                How many points do you want to guess that Elena won?
                </Text>
                <TextInput
                style = {styles.input}
                placeholder="answer"
                value = {myTextInput1}
                onChangeText = {onChangeInput1}
                />
                </View >
                <View style = {styles.button}>
                    <Button
                        title = "check"
                        onPress = {correct1}
                    />
                </View>
                {/* 조건 연산자 사용 Ex. {조건 ? view : null} 초기 값이 false이기 때문에 null값이 선택되었다가 true로 바뀌면 view출력 */}
                {show1 ? (
                <View>
                    <View style = {styles.textcon2}>
                    <Text style = {styles.text}>
                    Ok, you guessed [x] points for Elena. Then how many would Karla and Faye win?
                    </Text>
                    <TextInput
                    style = {styles.input}
                    placeholder="answer."
                    value = {myTextInput2}
                    onChangeText = {onChangeInput2}
                    />
                    </View>
                    <View style = {styles.button}>
                        <Button
                            title = "check"
                            onPress = {correct2}
                        />
                    </View>
                </View>
                ): null}
                {show2 ? (
                    <View>
                    <View style = {styles.textcon3}>
                    <Text style = {styles.text}>
                    Nice work! Now, what do Elena’s, Karla’s and Faye’s scores add up to?
                    </Text>
                    <TextInput
                    style = {styles.input}
                    placeholder="answer."
                    value = {myTextInput3}
                    onChangeText = {onChangeInput3}
                    />
                    </View>
                    <View style = {styles.button}>
                        <Button
                            title = "check"
                            onPress = {correct3}
                        />
                    </View>
                </View>
                ):null}
                {show3 ? (
                    <View>
                    <View style = {styles.textcon4}>
                    <Text style = {styles.text}>
                    Nice work! The points for Elena, Karla, and Faye add up to 114, 
                    so that seems correct! So who scored the most?
                    </Text>
                    <TextInput
                    style = {styles.input}
                    placeholder="answer."
                    value = {myTextInput4}
                    onChangeText = {onChangeInput4}
                    />
                    </View>
                    <View style = {styles.button}>
                        <Button
                            title = "check"
                            onPress = {correct4}
                        />
                    </View>
                </View>
                ):null}
            </View>
            </ScrollView>
        </TouchableWithoutFeedback> 
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#DDA0DD',
        paddingTop: 30,
        paddingBottom: 30
    },
    button: {
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
        marginTop: 20
    },
    textcon: {
        backgroundColor: 'white',
        height: 80,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
        marginTop: 10,
        borderRadius: 3,
    },
    textcon2: {
        backgroundColor: 'white',
        height: 80,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
        marginTop: 10,
        borderRadius: 3,
    },
    textcon3: {
        backgroundColor: 'white',
        height: 80,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
        marginTop: 10,
        borderRadius: 3,
    },
    textcon4: {
        backgroundColor: 'white',
        height: 100,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
        marginTop: 10,
        borderRadius: 3,
    },
    text: {
        fontSize: 20,
        color: 'black',
    },
    tt: {
        backgroundColor: '#DDA0DD',
        color: 'black',
        marginBottom: 5,
    },
    input: {
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: 'white',

    },
}); 

export default Strate4_1