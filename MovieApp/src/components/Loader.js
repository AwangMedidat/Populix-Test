import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import Constants from '../style/constants'

const Loader = () => {
  return (
    <ActivityIndicator size="large" color={Constants.textColor} />
  )
}

export default Loader