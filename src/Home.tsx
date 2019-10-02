/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { connect, Provider } from 'react-redux';

import store, { counterSlice } from './store';

interface HomeProps {
  counter: number;
}

const Home: React.FC<HomeProps> = ({ counter }) => {
  const onIncrementPress = useCallback(() => {
    store.dispatch(counterSlice.actions.increment());
  }, []);
  const onDecrementPress = useCallback(() => {
    store.dispatch(counterSlice.actions.decrement());
  }, []);

  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />

            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <View style={styles.counterWrapper}>
                  <Button onPress={onDecrementPress} title="-" />
                  <Text style={styles.sectionTitle}>Counter : {counter}</Text>
                  <Button onPress={onIncrementPress} title="+" />
                </View>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>Home.tsx</Text> to change this
                  screen and then come back to see your edits.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </Text>
              </View>
              <LearnMoreLinks />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  counterWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  highlight: {
    fontWeight: '700',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    color: Colors.dark,
    fontSize: 18,
    fontWeight: '400',
    marginTop: 8,
  },
  sectionTitle: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: '600',
  },
});

const mapStateToProps = state => ({
  counter: state,
});

export default connect(mapStateToProps)(Home);
