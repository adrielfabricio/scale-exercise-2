import { AxiosResponse } from 'axios';

import api from './api';
import { IGetCountries } from './interfaces';

export default {
	getCountries: async ({}: IGetCountries) => {
		const response: AxiosResponse = await api.get('/');
		return response.data;
	},
};
