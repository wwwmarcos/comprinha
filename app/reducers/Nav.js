import AppNavigator from '../Navigator'

const initialState = {
  index: 0,
  routes: [{
    key: 'Init',
    routeName: 'ShopsListScreen'
  }]
}

export default (state = initialState, action) => (
  AppNavigator.router.getStateForAction(action, state)
)