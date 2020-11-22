import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends React.Component{
    constructor(){
     super();
     this.state={
         emailId:'',
         password:''
     }
    }

userLogin=(emailId,password)=>{
firebase.auth().signInWithEmailAndPassword(emailId,password)
.then(()=>{
    return Alert.alert('login successful!')    
})
.catch((error)=>{
    var errorMessage=error.message;
    return Alert.alert(errorMessage);
})

}


userSignUp=(emailId,password)=>{
    firebase.auth().createUserWithEmailAndPassword(emailId,password)
    .then(()=>{
        return Alert.alert('sign up successful!')    
    })
    .catch((error)=>{
        var errorMessage=error.message;
        return Alert.alert(errorMessage);
    })
    
    }


    render(){
        return(
            // Making the title
            <View style={styles.contanier}>
                <View>
                 <Text style={styles.title}>
                     Barter System App
                 </Text>
                </View>

            
             <View>
                 <TextInput style={styles.loginBox}
                 placeholder="Enter your email"
                 keyboardType="email-address"
                 onChangeText={(text)=>{
                     this.setState({
                        emailId:text 
                     })
                 }}
                 />

                 <TextInput style={styles.loginBox}
                 placeholder="Enter your password"
                 secureTextEntry={true}
                 onChangeText={(text)=>{
                     this.setState({
                         password:text
                     })
                 }}
                 /> 

                 <TouchableOpacity style={[styles.button,{marginBottom:20,marginTop:20}]}
                 onPress={()=>{
                     this.userLogin(this.state.emailId,this.state.password);
                 }}
                 >
                     <Text style={styles.buttonText}>Login In</Text>
                 </TouchableOpacity>
                                 
                 <TouchableOpacity style={styles.button}
                 onPress={()=>{
                     this.userSignUp(this.state.emailId,this.state.password);
                 }}
                 >
                     <Text style={styles.buttonText}>Sign Up</Text>
                 </TouchableOpacity>


             </View>
            </View>
        )
    }

}


const styles=StyleSheetList.create({
    //8 styles required 
    container: {flex:1, backgroundColor:'90,50,120'},
    title:{size:20,fontFamily:'ariel', paddingBottom:30,colour:'40,50,60'},
    loginBox:{ width: 300, height: 40, borderBottomWidth: 1.5, borderColor : '#ff8a65', fontSize: 20, margin:10, paddingLeft:10 }, 
    button:{ width:300, height:50, justifyContent:'center', alignItems:'center', borderRadius:25, backgroundColor:"#ff9800", shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.30, shadowRadius: 10.32, elevation: 16, }, 
    buttonText:{ color:'#ffff', fontWeight:'200', fontSize:20 },
     buttonContainer:{ flex:1, alignItems:'center' } 
    })
