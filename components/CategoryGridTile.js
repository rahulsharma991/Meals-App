import {View, Pressable, Text, StyleSheet, Platform} from 'react-native';
import Color from '../utils/Color';

function CategoryGridTile({title, color, pressedAction}) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{color: Color.pressableGrayColor}}
        onPress={pressedAction}>
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black', // ios shadow property
    shadowOffset: {width: 0, height: 2}, // ios shadow property
    shadowRadius: 8, // ios shadow property
    shadowOpacity: 0.25, // ios shadow property
    backgroundColor: Color.white, // needed when giving shadow to ios.
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5, //for ios
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default CategoryGridTile;
