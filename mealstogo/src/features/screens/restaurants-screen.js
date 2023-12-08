import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card';

export const RestaurantsScreen = () => {

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar placeholder="Search" />
        </View>
        <View style={styles.list}>
          <RestaurantInfoCard/>
        </View>
      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    backgroundColor: 'grey',
    padding: 16
  },
  list: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 16
  }
});
