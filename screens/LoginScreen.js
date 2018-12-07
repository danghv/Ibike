import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation
    console.log('navigate...', navigate)
    console.log('aabcasdfasfsadfas')
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập số điện thoại"
          onChangeText={() => {
            console.log('smt changing...')
          }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Nhập mật khẩu"
          onChangeText={() => {
            console.log('smt changing...')
          }}
        />
        <Button
          onPress={() => {
            console.log('just press me...!')
            navigate('Home')
          }}
          title="Đăng Nhập"
          color="#841584"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textInput: {
    padding: 10,
    borderEndWidth: 1,
    borderEndColor: 'red',
  }
});