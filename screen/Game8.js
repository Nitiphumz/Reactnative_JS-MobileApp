import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'

const Game8 = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('Home')
  };
  return (
    <View style={styles.container}>

      <ScrollView>

        <Image source={require('../img/details/game8.jpg')} style={styles.img} />
       
        <Text style={styles.TextHead}>                   Terraria </Text>
        <Text style={styles.Price}> ราคา : 215 บาท</Text>
        <Text style={styles.Tag}> แนวเกม : Action,RPG,Sandbox,2มิติ,Online</Text>
        <Text style={styles.TextHead}> รายละเอียด : </Text>
        <Text style={styles.DetailText}>terraria นั้นเป็นผลงานของทีมพัฒนา Re-Logic ซึ่งมี Minecraft เป็นแรงบรรดาลใจในการสร้างสรรค์ผลงานนี้ สามารถสร้างของต่างๆ รวมถึงปรับแต่งพื้นที่ ภูมิประเทศให้เป็นอย่างที่ตัวเองต้องการได้ด้วยการขุด ต่อเติม และปรับเปลี่ยนอีกด้วยเพราะฉะนั้นจุดเด่นของ Terraria จึงอยู่ที่การเล่นเป็น action side-scroller ที่มี sandbox เป็นส่วนประกอบมากกว่า การได้ลงดัน ขุดถ้ำ หาของและตีบอสจึงเป็นเสน่ห์หลักของเกมเลยก็ว่าได้

        </Text>

        <Image source={require('../img/details/game81.jpg')} style={styles.img} />
        <Image source={require('../img/details/game82.jpg')} style={styles.img} />
        <Image source={require('../img/details/game83.jpg')} style={styles.img} />

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

export default Game8