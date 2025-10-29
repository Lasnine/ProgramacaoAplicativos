import {StyleSheet, Text, View} from  'react-native'

export default function HomeScreen() {
  return (
      <View>
        <Text style = {styles.colorBlue}>Hello World</Text>
        <View  style = {styles.square}></View>
      </View >
  );
};

const styles = StyleSheet.create({
  colorBlue:{
    color : 'purple',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 50,
    fontFamily: 'Heather',
    textAlign: 'center',
    margin: 15
  },
  square:{
    height: 350,
    width: 350,
    borderRadius: 10,
    backgroundColor: 'pink',
    alignSelf: 'center',
    margin: 10
  }
})