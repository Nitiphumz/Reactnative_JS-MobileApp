import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'

const Game2 = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('Home')
  };
  return (
    <View style={styles.container}>

      <ScrollView>

        <Image source={require('../img/details/game2.jpg')} style={styles.img} />
       
        <Text style={styles.TextHead}>                   Lies of P </Text>
        <Text style={styles.Price}> ราคา : 1,982 บาท</Text>
        <Text style={styles.Tag}> แนวเกม : โซลล์ไลล์,แอ็คชัน,การสำรวจ,3มิติ,ดาร์กแฟนตาซี</Text>
        <Text style={styles.TextHead}> รายละเอียด : </Text>
        <Text style={styles.DetailText}> เราจะได้เล่นตัวละครหลัก Pinocchio หุ่นยนต์ต่อสู้ที่ตื่นขึ้นมาที่สถานีรถไฟฟ้ากลางเมือง Krat เมืองที่ครั้งหนึ่งเคยสวยงาม แต่ปัจจุบันได้กลายเป็นนรกที่น่าสะพรึงกลัวที่ไม่อาจบรรยายได้ มีเพียงความบ้าคลั่ง และ กระหายเลือด จุดเริ่มต้นของเรื่องราวมีเพียงข้อความสั้น ๆ ที่ว่า "ตามหา Geppetto เขาอยู่ที่นี่ในเมืองนี้" ผู้เล่นจะต้องออกเดินทางค้นหาบุคคลลึกลับผู้นี้ พร้อมกับต่อสู้กับทุกสิ่งที่ขวางทาง "จงอย่าเชื่อใจใคร อย่าคาดหวังความช่วยเหลือ และ หากต้องการเป็นมนุษย์ จงโกหก"
        </Text>

        <Image source={require('../img/details/game21.jpg')} style={styles.img} />
        <Image source={require('../img/details/game22.jpg')} style={styles.img} />
        <Image source={require('../img/details/game23.jpg')} style={styles.img} />

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

export default Game2