import React, { Component } from 'react'
import { NavigationActions, addNavigationHelpers } from 'react-navigation/src/react-navigation';
import { connect } from 'react-redux'
import AppNavigator from '../Navigator';

const ComprinhaApp = ({ nav, dispatch }) =>  (
  <AppNavigator navigation={ addNavigationHelpers({ dispatch, state: nav }) } />
)

const mapStateToProps = ( state ) => state

const mapDispatchToProps = (dispatch => ({ dispatch }))

export default connect(mapStateToProps, mapDispatchToProps)(ComprinhaApp)