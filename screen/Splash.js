import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const Splash = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('Home')
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={[styles.customText, { marginTop: 10 }]}>ยินดีต้อนรับสู่</Text>
        <Image source={require('../img/logo.png')} style={styles.logo} />
        <Image source={require('../img/logo2.png')} style={styles.logo} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5a86ff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 5,
  },
  customText: {
    fontSize: 30,
    color: "#ffffff",
    fontFamily: 'cursive',
  },
});

export default Splash;
