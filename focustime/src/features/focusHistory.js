import { View, Text, StyleSheet, FlatList } from 'react-native';
import { RoundedButton } from '../components/roundedButton'
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history, setHistory }) => {
  if (!history || !history.length) return <Text style={styles.title}>NOTHING FOCUSED ON YET!</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>THINGS WE HAVE FOCUSED ON:</Text>
      <FlatList data={history} renderItem={renderItem} />
      <RoundedButton title='CLEAR' size={80} onPress={()=>setHistory([])}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    textAlign: 'center',
    padding: spacing.sm,
    fontWeight: 'bold',
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm
  },
});
