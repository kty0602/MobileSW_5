import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, BackHandler,
    ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { up6 } from "../Redux/Actions";

const Strate6_1 = (props) => {
    const dispatch = useDispatch() // 액션 불러오기 면어
    //dispatch는 리듀서가 스토어의 상태를 업데이트하는 방법을 알려주는 작업을 전달하는 데 사용.

    useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
            return () => backHandler.remove() }
    }, [])

    var count1 = 3;
    var count2 = 3;

    const [show, setShow] = useState(false); //2번째 화면 상태 값 default는 false로 동작
    const [myTextInput1_1, setMyTextInput1_1] = useState("") //1번 답 저장 하는 공간
    const [myTextInput1_2, setMyTextInput1_2] = useState("") //1번 답 저장 하는 공간
    const [myTextInput1_3, setMyTextInput1_3] = useState("") //1번 답 저장 하는 공간
    const [myTextInput2, setMyTextInput2] = useState("") //2번 답 저장 하는 공간

    const onChangeInput1_1 = (event) => { setMyTextInput1_1(event) }
    const onChangeInput1_2 = (event) => { setMyTextInput1_2(event) }
    const onChangeInput1_3 = (event) => { setMyTextInput1_3(event) }
    const onChangeInput2 = (event) => { setMyTextInput2(event) }
    
    const correct1 = () => {
        if (myTextInput1_3==104 &&
            (myTextInput1_1==24 && (myTextInput1_2=='4*x' || myTextInput1_2=='x*4' || myTextInput1_2=='4x' || myTextInput1_2=='x4')) ||
            (myTextInput1_2==24 && (myTextInput1_1=='4*x' || myTextInput1_1=='x*4' || myTextInput1_1=='4x' || myTextInput1_1=='x4'))) {
            alert("next");
            setShow(true) }
        else {
            if(count1 > 0) {
                count1 -= 1;
                alert("miss you have "+(count1)+" chance");
            }
            else if(count1 == 0) {
                alert("miss you have no chance")
                props.navigation.navigate("Quiz6")
            } }
    }

    const correct2 = () => {
        if (myTextInput2 == 20) {
            dispatch(up6()) //점수 추가 액션 불러오기
            alert("Nice! The width of the rectangle 20. Let’s try a different method!");
            props.navigation.navigate("Quiz6") }
        else {
            if(count2 > 0) {
                count2 -=1;
                alert("miss you have "+(count2)+" chance");
            }
            else if(count2 == 0) {
                alert("miss you have no chance")
                props.navigation.navigate("Quiz6")
            } }
    }

    return (
        <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={styles.mainView}> 
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>    
                <ScrollView style ={{width:"100%"}}>
                    <View style = {styles.mainView}>
                        <View style = {styles.quizSpace}>
                            <View style = {{alignItems:'center'}}>
                               <Text style = {styles.header}>PROMPT.1</Text>
                                <Text style = {styles.quizText}>What equation will represent the situation?{"\n"}{"\n"}
                                    Use the letter “x” as your variable
                                </Text>
                            </View>
                            <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput1_1}
                                 onChangeText = {onChangeInput1_1}
                                 maxLength = {6}/>
                                <Text style = {{fontSize:18}}>+</Text>

                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput1_2}
                                 onChangeText = {onChangeInput1_2}
                                 maxLength = {6}/>
                                <Text style = {{fontSize:18}}>=</Text>

                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput1_3}
                                 onChangeText = {onChangeInput1_3}
                                 maxLength = {6}/>
                            </View>
                        </View >

                        <View style = {styles.checkButton}>
                            <Button
                             title="check & next"
                             color='#8463ff'
                             onPress = {correct1}/>
                        </View>
                    
                        {/* 조건 연산자 사용 Ex. {조건 ? view : null} 초기 값이 false이기 때문에 null값이 선택되었다가 true로 바뀌면 view출력 */}
                        {show ? (
                        <View>
                            <View style = {styles.quizSpace}>
                                <View style = {{alignItems:'center'}}>
                                    <Text style = {styles.header}>PROMPT.2</Text>
                                    <Text style = {styles.quizText}>Nice job!{"\n"}
                                        That equation looks good.{"\n"}{"\n"}
                                        Now can you solve for “x”?
                                    </Text>
                                </View>
                                <TextInput
                                 style = {styles.textInput}
                                 placeholder="Answer"
                                 value = {myTextInput2}
                                 onChangeText = {onChangeInput2}/>
                            </View>

                            <View style = {styles.checkButton}>
                                <Button
                                 title="submit"
                                 color='#8463ff'
                                 onPress = {correct2}/>
                            </View>
                        </View>
                        ): null}
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback> 
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex:1,
        paddingTop:15,
        paddingBottom:30,
        backgroundColor: '#eefbff'
    },
    header: {
        padding:12,
        fontSize:20,
        textDecorationLine:'underline'
    },
    quizSpace: {
        padding:4,
        margin:20,
        marginTop:10,
        borderRadius:10,
        borderWidth:0,
        borderColor:'black',
        backgroundColor:'#fbf3ff'
    },
    quizText: {
        fontSize:18
    },
    textInput: {
        marginTop:15,
        marginBottom:15,
        marginLeft:10,
        marginRight:10,
        paddingHorizontal:10,
        borderRadius:8,
        borderWidth:1,
        borderColor:'#d6d6d6',
        backgroundColor:'white',
    },
    checkButton: {
        marginLeft:100,
        marginRight:100,
        marginBottom:20,
        marginTop:10
    }
}); 

export default Strate6_1