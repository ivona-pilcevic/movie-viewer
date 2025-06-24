import { Layout } from 'antd'
import styled from 'styled-components'
import { SPACES } from '../styles/spaces'
import { COLORS } from '../styles/colors'

const { Header } = Layout

const MainHeader = () => {
	return (
		<StyledHeader>
			<Title>Movie Viewer</Title>
		</StyledHeader>
	)
}

export default MainHeader

const StyledHeader = styled(Header)`
	text-align: center;
	background-color: ${COLORS.HEADER_BACKGROUND};
	border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
	display: flex;
	align-items: center;
	padding: ${SPACES.XXL};
`
const Title = styled.h1`
	color: ${COLORS.HIGHLIGHT};
	font-family: 'Bebas Neue', sans-serif;
	font-size: ${SPACES.XXL};
`
