import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AssetExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
Daftar Wisata Wonosobo
        </Text>
		<Text>
Telaga Warna Dieng
        </Text>
        <Image style={styles.logo} source={require("../assets/dieng.png")}/>
         <Text>
Alamat : Desa Dieng Kec. Kejajar
        </Text>
<Text >

  </Text>
  <Text >
Lubang Sewu Wadaslintang
        </Text>
        <Image style={styles.logo} source={require("../assets/lubang.png")}/>
         <Text>
Alamat : Desa Erorejo Wadaslintang
        </Text>
        <Text >

  </Text>
		<Text >
Pemandian Kalianget
        </Text>
        <Image style={styles.logo} source={require("../assets/kali.png")}/>
         <Text>
Alamat : Kelurahan Kalianget Wonosobo
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "orange",
    height: 128,
    width: 128,
  }
});
