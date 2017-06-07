import React, { Component } from 'react'
import { AppRegistry,  StyleSheet, View, Alert } from 'react-native'
import { NavigationActions, addNavigationHelpers } from 'react-navigation/src/react-navigation';
import { connect } from 'react-redux'
import AppNavigator from '../Navigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})

const ComprinhaApp = ({ nav, dispatch }) =>  (
  <AppNavigator navigation={ addNavigationHelpers({ dispatch, state: nav }) } />
)

const mapStateToProps = ( state ) => state

const mapDispatchToProps = (dispatch => ({ dispatch }))

export default connect(mapStateToProps, mapDispatchToProps)(ComprinhaApp)