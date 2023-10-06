import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'

const Game4 = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('Home')
  };
  return (
    <View style={styles.container}>

      <ScrollView>

        <Image source={require('../img/details/game4.jpg')} style={styles.img} />
       
        <Text style={styles.TextHead}>                   Starfield </Text>
        <Text style={styles.Price}> ราคา : 2,299 บาท</Text>
        <Text style={styles.Tag}> แนวเกม : อวกาศ,สวมบทบาท,ผู้เล่นเดี่ยว,   ท่องโลกกว้าง</Text>
        <Text style={styles.TextHead}> รายละเอียด : </Text>
        <Text style={styles.DetailText}>สำหรับผู้เล่นนั้น จะได้รับบทเป็นตัวละครที่ปรับแต่งได้ ทั้งยังเป็นหนึ่งในสมาชิกของ Constellation องค์กรของนักสำรวจอวกาศที่ตั้งใจและอุทิศตนเพื่อการช่วยเหลือมนุษยชาติมากกว่าผลประโยชน์ และต้องคอยค้นหา ความลับต่างๆ ที่ซ่อนอยู่ในจักรวาล นอกจากนี้ผู้เล่นจะยังต้องมีส่วนร่วมว่าจะเป็นผู้เฝ้ามอง ผู้สงบศึก หรือผู้จุดประกายสงครามของความขัดแย้งระหว่างสองมหาอำนาจดังกล่าวก็เป็นได้! 
        </Text>

        <Image source={require('../img/details/game41.jpg')} style={styles.img} />
        <Image source={require('../img/details/game42.jpg')} style={styles.img} />
        <Image source={require('../img/details/game43.jpg')} style={styles.img} />

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

export default Game4