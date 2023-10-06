import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'

const Game1 = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('Home')
  };
  return (
    <View style={styles.container}>

      <ScrollView>

        <Image source={require('../img/details/game1.png')} style={styles.img} />
       
        <Text style={styles.TextHead}>             Resident Evil 4 </Text>
        <Text style={styles.Price}> ราคา : 1,929 บาท</Text>
        <Text style={styles.Tag}> แนวเกม : แอ็คชั่น,สยองขวัญ,เอาชีวิตรอดแบบสยองขวัญ,ซอมบี้</Text>
        <Text style={styles.TextHead}> รายละเอียด : </Text>
        <Text style={styles.DetailText}>ผู้เล่นได้สวมบทเป็นตัวเอกหนุ่ม Leon ออกทำภารกิจช่วยเหลือลูกสาวประธานาธิบดีที่ถูกจับตัวไป ซึ่งในระหว่างปฏิบัติหน้าที่ก็จะต้องต่อกรกับเหล่าผู้คนที่ติดเชื้อจนคลุ้มคลั่งด้วยปืนและอาวุธต่าง ๆ ที่มี เพื่อเอาตัวรอดและทำภารกิจให้สำเร็จให้ได้
        </Text>

        <Image source={require('../img/details/game11.jpg')} style={styles.img} />
        <Image source={require('../img/details/game12.jpg')} style={styles.img} />
        <Image source={require('../img/details/game13.jpg')} style={styles.img} />

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

export default Game1