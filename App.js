import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , Button , Pressable} from 'react-native';

export default function App() {

  const [randomcolor,setrandomcolor] = useState(`rgb(32,0,126)`);

  function changeHandler()  {
  //console.log("hii");
  let color = `rgb(${Math.floor(Math.random() * 255)},
  ${Math.floor(Math.random() * 255)},
  ${Math.floor(Math.random() * 255)})`
  setrandomcolor(color);
  };

  function resetHandler() {
     setrandomcolor("#000000");
  };

  return (
    <>
    <StatusBar theme="dark"/>
    <View style={[styles.container,{backgroundColor:randomcolor}]}>
      <Button title='Change Color' color="#87cefa" onPress={changeHandler}/>
     <View style={styles.Button}>
       <Button title='Default Color' color="#8a2be2" onPress={resetHandler} />
     </View>
     </View>
    </>
   
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    //padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#e329a2',
    
  },
  Button: {
    paddingVertical:'10%',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#e329a2',
  },
});
