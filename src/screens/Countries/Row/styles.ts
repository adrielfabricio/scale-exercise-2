import styled from 'styled-components/native';
import colors from '../../../constants/colors';

export const Container = styled.Pressable({
	flexDirection: 'row',
	alignItems: 'center',
	paddingVertical: 10,
});

export const CountryCodeView = styled.View({
	marginRight: 10,
});

export const CountryCode = styled.Text({
	fontSize: 20,
	fontWeight: 'bold',
	color: colors.black,
});

export const CountryInformationView = styled.View({
	paddingLeft: 10,
});

export const CountryNameView = styled.View({
	flexDirection: 'row',
	alignItems: 'center',
});

export const Name = styled.Text({
	fontSize: 16,
	fontWeight: 'bold',
	color: colors.black,
});

export const Frontiers = styled.Text({
	fontSize: 12,
	color: colors.gray,
});
