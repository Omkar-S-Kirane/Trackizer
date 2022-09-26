import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width - 20;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#1C1C23',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    marginTop: 80,
  },
  login: {
    width: windowWidth,
    flexDirection: 'column',
    alignItems: 'center',
  },
  txt: {
    fontSize: 13,
    color: '#666680',
    fontFamily: 'inter',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  txt1: {
    fontFamily: 'inter',
    marginHorizontal: 10,
    color: '#666680',
    fontSize: 10,
    alignItems: 'flex-start',
  },
  input: {
    width: windowWidth - 20,
    borderWidth: 2,
    marginVertical: 5,
    borderRadius: 15,
    borderColor: '#353542',
    marginHorizontal: 10,
    color: '#FFFFFF',
  },
  loginComponent: {
    marginVertical: 5,
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
  },
  check: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  diff: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  btn: {
    width: windowWidth - 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    height: 48,
    borderRadius: 20,
  },
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
