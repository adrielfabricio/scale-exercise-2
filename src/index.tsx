import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import Header from './components/Header';
import colors from './constants/colors';
import Countries from './screens/Countries';

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';
	const backgroundStyle = {
		backgroundColor: colors.white,
		flex: 1,
	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<Header />
			<Countries />
		</SafeAreaView>
	);
};

export default App;
