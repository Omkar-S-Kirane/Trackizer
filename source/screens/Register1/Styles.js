import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#1C1C23',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginVertical: 370,
  },
  logo: {
    justifyContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 35,
  },
  btn: {
    width: windowWidth - 50,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    height: 48,
    borderRadius: 20,
  },
  insideButtonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ico: {
    width: 15,
    height: 15,
    marginHorizontal: 10,
  },
  txt: {
    fontSize: 10,
    color: '#FFFFFF',
    fontFamily: 'inter',
    fontWeight: '800',
  },
  content: {
    justifyContent: 'center',
    marginVertical: 300,
  },
  or: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'inter',
    fontWeight: '600',
  },
  orView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  lastButton: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
