import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'

const Game7 = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('Home')
  };
  return (
    <View style={styles.container}>

      <ScrollView>

        <Image source={require('../img/details/game7.jpg')} style={styles.img} />
       
        <Text style={styles.TextHead}>            Stardew Valley </Text>
        <Text style={styles.Price}> ราคา : 315 บาท</Text>
        <Text style={styles.Tag}> แนวเกม : ทำฟาร์ม,จำลองสถานการณ์,2มิติ, เล่นได้หลายคน</Text>
        <Text style={styles.TextHead}> รายละเอียด : </Text>
        <Text style={styles.DetailText}>Stardew Valley คือเกมทำฟาร์ม ที่ได้รับแรงบันดาลใจจาก Harvest Moon ชุดเกมปลูกผักชื่อดัง แต่จะมีเนื้อเรื่องที่แฟนตาซีและมีลูกเล่นที่มากกว่า
โดย Stardew Valley จะให้เรารับบทบาทเป็นตัวละครที่กำลังเบื่อหน่ายชีวิตการทำงานในออฟฟิศ จนวันหนึ่งต้องมาดูแลที่ดินและบ้านของคุณปู่ที่เสียชีวิตลงไป ในสถานที่ ที่ชื่อเดียวกับตัวเกม หรือก็คือ Stardew Valley สำหรับตัวละครนั้น สามารถทำกิจกรรมต่าง ๆ ตั้งแต่ปลูกพืชผล เลี้ยงปศุสัตว์ ประดิษฐ์สินค้า ขุดแร่ ขายผลผลิต พบปะสังสรรค์กับชาวเมือง แต่งงาน มีลูก รวมถึงต่อสู้กับมอนสเตอร์
โดยระหว่างที่เราทำกิจกรรมแต่ละอย่าง ก็จะมีเนื้อเรื่องหลักของตัวละครสอดแทรกเข้ามาด้วย

        </Text>

        <Image source={require('../img/details/game71.jpg')} style={styles.img} />
        <Image source={require('../img/details/game72.jpg')} style={styles.img} />
        <Image source={require('../img/details/game73.jpg')} style={styles.img} />

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

export default Game7