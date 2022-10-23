import {CATEGORIES} from '../data/dummy-data';
import {FlatList} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

function CategorieScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
    />
  );
}

export default CategorieScreen;
