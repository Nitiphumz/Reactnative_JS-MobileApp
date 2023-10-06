import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'

const Game5 = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('Home')
  };
  return (
    <View style={styles.container}>

      <ScrollView>

        <Image source={require('../img/details/game5.jpg')} style={styles.img} />
       
        <Text style={styles.TextHead}>                  PAYDAY3 </Text>
        <Text style={styles.Price}> ราคา : 949 บาท</Text>
        <Text style={styles.Tag}> แนวเกม : การปล้น,เล่นแบบร่วมมือกัน,แอ็คชัน,อาชญากรรม</Text>
        <Text style={styles.TextHead}> รายละเอียด : </Text>
        <Text style={styles.DetailText}>ให้เราตั้งแก๊งกับเพื่อนจะอยู่เหล่าไหนก็ปล้นมันระเบิดไม่ว่าจะเป็น Dallas, Hoxton, Chains และ Wolf เราก็ต้องวางแผนกับเพื่อนแล้วร่วมมือกันออกไปปล้นธนาคารเพื่อทำภารกิจให้สำเร็จ ภายใต้ชื่อภารกิจ “No Rest for the Wicked” แถมการเล่นยังมีระบบให้เลือกท้าทายได้ทั้ง Normal, Hard, Very Hard และ Overkill ทุกคนสามารถเลือกได้ตามระดับความยากเลยล่ะ ซึ่งเลเวลอาวุธจะสูงสุดที่ 8 ส่วนระดับความยากทั้งหมดจะสามารถเล่นได้คือ Infamy 22  
        </Text>

        <Image source={require('../img/details/game51.jpg')} style={styles.img} />
        <Image source={require('../img/details/game52.jpg')} style={styles.img} />
        <Image source={require('../img/details/game53.jpg')} style={styles.img} />

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

export default Game5