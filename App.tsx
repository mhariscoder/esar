import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar } from 'react-native';
import FullPageLoading from './src/components/BuddyFullPageLoading';
import Navigation from './src/navigation';
import FlashMessage from 'react-native-flash-message';

function App() {
  

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <FullPageLoading />
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          <Navigation />
          <FlashMessage position="top" />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

export default App;
