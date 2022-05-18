import React from 'react';

import { IRowProps } from './interfaces';
import {
	Container,
	Frontiers,
	Name,
	CountryInformationView,
	CountryCodeView,
	CountryCode,
	CountryNameView,
} from './styles';

const Row: React.FC<IRowProps> = ({ item }) => {
	return (
		<Container>
			<CountryCodeView>
				<CountryCode>{item.code}</CountryCode>
			</CountryCodeView>
			<CountryInformationView>
				<CountryNameView>
					<Name>{`${item.name} `}</Name>
					<Frontiers>{`(nº fronteiras: ${item.fronteiras.length})`}</Frontiers>
				</CountryNameView>
				<Frontiers>{`${item.fronteiras}`}</Frontiers>
			</CountryInformationView>
		</Container>
	);
};

export default Row;
