import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'

const Game10 = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('Home')
  };
  return (
    <View style={styles.container}>

      <ScrollView>

        <Image source={require('../img/details/game10.png')} style={styles.img} />
       
        <Text style={styles.TextHead}>          League of Legends </Text>
        <Text style={styles.Price}> ราคา : ฟรี</Text>
        <Text style={styles.Tag}> แนวเกม : วางแผน กลยุทธ์ MOBA</Text>
        <Text style={styles.TextHead}> รายละเอียด : </Text>
        <Text style={styles.DetailText}>League of Legends คือเกมแนววางแผนกลยุทธ์แบบทีม ซึ่งทั้งสองทีมจะมีแชมเปี้ยนที่ทรงพลังฝั่งละ 5 ตัว และต้องมาเผชิญหน้ากันเพื่อทำลายฐานของอีกฝ่าย เลือกแชมเปี้ยนที่มีมากกว่า140ตัว มาสร้างเกมเพลย์ที่ตรึงตา จัดการสังหารเป้าหมาย และโค้นล้มป้อมปราการซัตรูในขณะที่ห้ำหั่นเพื่อชัยชนะ

        </Text>
        <Image source={require('../img/details/game101.jpg')} style={styles.img} />
        <Image source={require('../img/details/game102.jpg')} style={styles.img} />
        <Image source={require('../img/details/game103.jpg')} style={styles.img} />

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

export default Game10