import {View, Text, Pressable, Image, StyleSheet, Platform} from 'react-native';
import Color from '../utils/Color';

function MealItem({title, imageUrl, duration, complexity, affordability}) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: Color.pressableGrayColor}}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri: imageUrl}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: Color.white,
    elevation: 4,
    shadowColor: 'black', // ios shadow property
    shadowOffset: {width: 0, height: 2}, // ios shadow property
    shadowRadius: 8, // ios shadow property
    shadowOpacity: 0.25, // ios shadow property
    backgroundColor: Color.white, // needed when giving shadow to ios.
  },
  buttonPressed: {
    opacity: 0.5, //for ios
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    padding: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
export default MealItem;
