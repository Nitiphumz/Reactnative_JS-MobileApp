import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'

const Game3 = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('Home')
  };
  return (
    <View style={styles.container}>

      <ScrollView>

        <Image source={require('../img/details/game3.jpg')} style={styles.img} />
       
        <Text style={styles.TextHead}>               Dead Island 2 </Text>
        <Text style={styles.Price}> ราคา : 1,490 บาท</Text>
        <Text style={styles.Tag}> แนวเกม : FPS ,สำรวจ ,ซอมบี้, Open World , Survival Horror</Text>
        <Text style={styles.TextHead}> รายละเอียด : </Text>
        <Text style={styles.DetailText}>Dead Island 2 ถูกเล่าเรื่องราวจากภาคก่อน โดยจะให้ผู้เล่นเผชิญกับฝูงซอมบี้ที่แพร่ระบาดในเมืองลอสแองเจอลิส สหรัฐอเมริกา โดยผู้เล่นจะได้สวมบทบาทเป็น 1 ใน 6 ตัวละครที่ติดเชื้อ แต่มีภูมิคุ้มกัน จึงต้องทำการต่อสู้กับเหล่าซอมบี้ และค้นหาที่มาของโรคระบาด และเอาชีวิตรอดในเกม
        </Text>

        <Image source={require('../img/details/game31.jpg')} style={styles.img} />
        <Image source={require('../img/details/game32.jpg')} style={styles.img} />
        <Image source={require('../img/details/game33.jpg')} style={styles.img} />

      </ScrollView>

      <View style={styles.lower}>
        <View style={styles.containericon}>

          <Pressable onPress={onPress}>
            <Image source={require('../img/icon/house.png')} style={styles.icon} />
          </Pressable>

        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#212d50',
  },

  containericon: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    margin: 10,
    height: 50,
    width: 200,
  },


  lower: {
    margin: 10,
    width: 270,
    height: 70,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'black',

  },

  TextHead: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#ffffff',
  },

  Price: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#71ff95',
  },

  Tag: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#71ff95',
  },

  details: {
    margin: 10,
    width: 380,
    height: 120,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'white'
  },

  lower: {
    margin: 10,
    width: 270,
    height: 70,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'black'
  },

  img: {
    margin: 10,
    height: 300,
    width: 380,
    borderRadius: 20,
  },

  Headers: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  DetailText: {
    margin: 10,
    fontSize: 20,
    color: '#ffffff',
    fontFamily: 'Pridi-Regular',
  },

  boldText: {
    fontWeight: 'bold',
  },

});

export default Game3