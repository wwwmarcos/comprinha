import { StackNavigator } from 'react-navigation'
import ShopsListScreen from './containers/ShopsListScreen'
import BarCodeScannerScreen from './containers/BarCodeScannerScreen'

const AppNavigator = new StackNavigator({
  ShopsListScreen: {
    screen: ShopsListScreen,
    navigationOptions: ({ navigation }) => ({ title: 'Lista de compras' }),
  },
  BarCodeScannerScreen: {
    screen: BarCodeScannerScreen,
    navigationOptions: ({ navigation }) => ({ title: 'Codigo de barras' }),
  }
})

export default AppNavigator