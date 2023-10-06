import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';

const Home = ({ navigation }) => {
  const onPress1 = () => {
    navigation.navigate('Game1')
  };
  const onPress2 = () => {
    navigation.navigate('Game2')
  };
  const onPress3 = () => {
    navigation.navigate('Game3')
  };
  const onPress4 = () => {
    navigation.navigate('Game4')
  };
  const onPress5 = () => {
    navigation.navigate('Game5')
  };
  const onPress6 = () => {
    navigation.navigate('Game6')
  };
  const onPress7 = () => {
    navigation.navigate('Game7')
  };
  const onPress8 = () => {
    navigation.navigate('Game8')
  };
  const onPress9 = () => {
    navigation.navigate('Game9')
  };
  const onPress10 = () => {
    navigation.navigate('Game10')
  };
  

  return (

    <View style={styles.container}>

      <Image source={require('../img/home1.png')} style={styles.logo} />

      <ScrollView>
        <View style={styles.innerContainer1}>

          <Pressable onPress={onPress1}>
            <Image source={require('../img/Game1.png')} style={styles.img} />
          </Pressable>

          <Pressable onPress={onPress2}>
            <Image source={require('../img/Game2.png')} style={styles.img} />
          </Pressable>

        </View>
        <View style={styles.innerContainer2}>

          <Pressable onPress={onPress3}>
            <Image source={require('../img/Game3.png')} style={styles.img} />
          </Pressable>

          <Pressable onPress={onPress4}>
            <Image source={require('../img/Game4.png')} style={styles.img} />
          </Pressable>

        </View>
        <View style={styles.innerContainer3}>

          <Pressable onPress={onPress5}>
            <Image source={require('../img/Game5.png')} style={styles.img} />
          </Pressable>

          <Pressable onPress={onPress6}>
            <Image source={require('../img/Game6.png')} style={styles.img} />
          </Pressable>

        </View>
        <View style={styles.innerContainer4}>

          <Pressable onPress={onPress7}>
            <Image source={require('../img/Game7.png')} style={styles.img} />
          </Pressable>

          <Pressable onPress={onPress8}>
            <Image source={require('../img/Game8.png')} style={styles.img} />
          </Pressable>

        </View>
        <View style={styles.innerContainer5}>

          <Pressable onPress={onPress9}>
            <Image source={require('../img/Game9.png')} style={styles.img} />
          </Pressable>

          <Pressable onPress={onPress10}>
            <Image source={require('../img/Game10.png')} style={styles.img} />
          </Pressable>

        </View>
      </ScrollView>

      <View style={styles.lower}>
        <View style={styles.containericon}>

          <Image source={require('../img/icon/house.png')} style={styles.icon} />

        </View>
      </View>


    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#5a86ff',
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

  logo: {
    marginTop: -30,

  },

  lower: {
    margin: 10,
    width: 270,
    height: 70,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'black'

  },

  innerContainer: {
    flexDirection: 'row',
  },

  innerContainer1: {
    flexDirection: 'row',

  },
  innerContainer2: {
    flexDirection: 'row',
  },

  innerContainer3: {
    flexDirection: 'row',
  },

  innerContainer4: {
    flexDirection: 'row',
  },

  innerContainer5: {
    flexDirection: 'row',
  },

  img: {
    margin: 10,
    height: 185,
    width: 185,
  },

  Headers: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  customText: {
    fontSize: 40,
    color: '#ffffff',
    fontFamily: 'cursive',
  },

});

export default Home;
