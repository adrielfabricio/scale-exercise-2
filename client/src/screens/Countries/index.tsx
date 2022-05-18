import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import requests from '../../services/requests';
import Loading from '../../components/Loading';

import Row from './Row';
import { Country } from './interfaces';
import { IRowProps } from './Row/interfaces';
import { Container, dividerStyle, flatList } from './styles';

const Countries: React.FC = () => {
	const [countries, setCountries] = useState<Country>();
	const [loading, setLoading] = useState(false);

	async function getCountries() {
		setLoading(true);
		try {
			const response = await requests.getCountries({});
			setCountries(response.data);
			setLoading(false);
		} catch (error: any) {
			setLoading(false);
			console.error(error);
		}
	}

	function renderItem({ item }: IRowProps) {
		return <Row key={item.code} item={item} />;
	}

	function renderItemSeparatorComponent() {
		return <View style={dividerStyle} />;
	}

	useEffect(() => {
		getCountries();
	}, []);

	return (
		<Container>
			{!loading && countries ? (
				<FlatList
					data={countries}
					style={flatList.style}
					contentContainerStyle={flatList.containerStyle}
					renderItem={renderItem}
					keyExtractor={(item: any) => item.code}
					ItemSeparatorComponent={renderItemSeparatorComponent}
					showsVerticalScrollIndicator={false}
				/>
			) : (
				<Loading />
			)}
		</Container>
	);
};

export default Countries;
