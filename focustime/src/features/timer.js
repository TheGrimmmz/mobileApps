import { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/countdown';
import { RoundedButton } from '../components/roundedButton';
import { Timing } from './timing';
import { spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const ONE_SEC_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SEC_IN_MS,
  1 * ONE_SEC_IN_MS,
  1 * ONE_SEC_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
          onReset={clearSubject}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>FOCUSING ON: </Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.progress}
          style={{ height: spacing.sm }}
        />
      </View>
      <View style={styles.timing}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.button}>
        {!isStarted ? (
          <RoundedButton size={100} title="START" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="PAUSE" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.clear}>
        <RoundedButton size={75} title="CLEAR" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timing: {
    flex: 0.1,
    flexDirection: 'row',
    paddingTop: spacing.xxl,
  },
  button: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clear: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
});
