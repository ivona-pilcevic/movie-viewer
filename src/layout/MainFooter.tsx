import { Layout } from 'antd'
import styled from 'styled-components'
import { COLORS } from '../styles/colors'

const { Footer } = Layout

const MainFooter = () => {
	return (
		<StyledFooter>Movie Viewer ©{new Date().getFullYear()} Created by Ivona Pilčević </StyledFooter>
	)
}

const StyledFooter = styled(Footer)`
	color: rgba(255, 255, 255, 0.2);
	background-color: ${COLORS.HEADER_BACKGROUND};
	border-top: 0.5px solid rgba(255, 255, 255, 0.2);
	text-align: center;
`

export default MainFooter
