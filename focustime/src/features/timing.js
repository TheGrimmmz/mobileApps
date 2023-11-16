import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/roundedButton';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timing}>
        <RoundedButton size={60} title="5" onPress={() => onChangeTime(5)} />
      </View>
      <View style={styles.timing}>
        <RoundedButton size={60} title="10" onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.timing}>
        <RoundedButton size={60} title="20" onPress={() => onChangeTime(20)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timing: {
    flex: 1,
    alignItems: 'center',
  },
});
