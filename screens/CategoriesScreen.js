import {CATEGORIES} from '../data/dummy-data';
import {FlatList} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

function CategoriesScreen({navigation}) {
  function renderCategoryItem(itemData) {
    function pressedhandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        pressedAction={pressedhandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
