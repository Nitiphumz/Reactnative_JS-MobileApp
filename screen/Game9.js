import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'

const Game9 = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('Home')
  };
  return (
    <View style={styles.container}>

      <ScrollView>

        <Image source={require('../img/details/game9.png')} style={styles.img} />
       
        <Text style={styles.TextHead}>                   Valorant </Text>
        <Text style={styles.Price}> ราคา : ฟรี</Text>
        <Text style={styles.Tag}> แนวเกม : วิดีโอเกมยิงมุมมองบุคคลที่หนึ่ง</Text>
        <Text style={styles.TextHead}> รายละเอียด : </Text>
        <Text style={styles.DetailText}>วาโลแรนต์ เป็นวิดีโอเกมออนไลน์หลายผู้เล่น แนวยิงมุมมองบุคคลที่หนึ่ง แนวฮีโร่ชูตเตอร์ที่ใช้ทีมเป็นฐาน ผู้เล่นแต่ละคนจะเลือกตัวละครที่เรียกว่า             "เอเจนท์ (Agents)" เอเจนท์ได้มีการออกแบบจากผู้คนในหลากหลายประเทศและวัฒนธรรมทั่วโลก ในเกมโหมดหลัก ผู้เล่นจะได้รับมอบหมายให้เป็นทีมโจมตีหรือป้องกันโดยในแต่ละทีมมีผู้เล่น 5 คน เอเจนท์มีความสามารถเฉพาะตัว แต่ละเอเจนท์ต้องการการชาร์จแต้มความสามารถอัลทิเมทเฉพาะตัว ใช้การชาร์จแต้มผ่านการฆ่า การตาย การเก็บลูกแก้ว หรือการติดตั้งหรือการกู้สไปก์

        </Text>

        <Image source={require('../img/details/game91.jpg')} style={styles.img} />
        <Image source={require('../img/details/game92.png')} style={styles.img} />
        <Image source={require('../img/details/game93.jpg')} style={styles.img} />

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

export default Game9