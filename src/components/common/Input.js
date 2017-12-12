import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { containerStyles, inputStyles, labelStyles } = styles;

  return (
    <View style={containerStyles}>
      <Text style={labelStyles}>{ label }</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyles}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = {
  containerStyles: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputStyles: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyles: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  }
};

export { Input };