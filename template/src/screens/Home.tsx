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
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { connect } from 'react-redux';
import { Trans } from 'react-i18next';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import store, { counterSlice } from '../store';
import Button from '../components/button';

interface HomeProps extends NavigationStackScreenProps {
  counter: number;
}

const Section: React.FC = ({ children }) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>See Your Changes</Text>
    <Text style={styles.sectionDescription}>{children}</Text>
  </View>
);

const Home: React.FC<HomeProps> = ({ counter, navigation }) => {
  const onIncrementPress = useCallback(() => {
    store.dispatch(counterSlice.actions.increment());
  }, []);
  const onDecrementPress = useCallback(() => {
    store.dispatch(counterSlice.actions.decrement());
  }, []);

  const onAproposPress = useCallback(() => {
    navigation.navigate('Apropos');
  }, [navigation]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <Header />

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <View style={styles.counterWrapper}>
                <Button onPress={onDecrementPress}>-</Button>
                <Text style={styles.sectionTitle}>Counter : {counter}</Text>
                <Button onPress={onIncrementPress}>+</Button>
              </View>

              <Button onPress={onAproposPress}>Go to apropos</Button>

              <Text style={styles.sectionDescription}>
                <Trans i18nKey="home__welcome_title">
                  Edit <Text style={styles.highlight}>Home.tsx</Text> to change this
                  screen and then come back to see your edits.
                </Trans>
              </Text>
            </View>

            <Section>
              <ReloadInstructions />
            </Section>

            <Section>
              <DebugInstructions />
            </Section>

            <Section>Read the docs to discover what to do next:</Section>

            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
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
