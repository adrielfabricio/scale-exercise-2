export type Country = {
	code: string;
	name: string;
	fronteiras: Array<string>;
	n_frontiers: number;
};

export interface ICountries {
	data: Array<Country>;
}
