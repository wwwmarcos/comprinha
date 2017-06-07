import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { GREEN_COLOR } from '../constants/AppColors'

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})

const AddButton = ({ onPress, title }) => (
  <View style={ styles.container }>
    <Button
    onPress={ onPress }
    title={ title }
    color={ GREEN_COLOR }
    accessibilityLabel="Learn more about this purple button"/>
  </View>
)

export default AddButton