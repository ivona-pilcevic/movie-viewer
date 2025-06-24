import { Layout as LayoutWrapper } from 'antd'
import type { ReactNode } from 'react'
import MainHeader from './MainHeader'
import styled from 'styled-components'
import MainFooter from './MainFooter'
import { Content } from 'antd/es/layout/layout'
import { COLORS } from '../styles/colors'

interface IProps {
	children: ReactNode | ReactNode[]
}

const Layout: React.FC<IProps> = ({ children }) => {
	return (
		<StyledLayout style={{ minHeight: '100vh' }}>
			<MainHeader />
			<Content>{children}</Content>
			<MainFooter />
		</StyledLayout>
	)
}

const StyledLayout = styled(LayoutWrapper)`
	background: ${COLORS.BACKGROUND};
	width: 100%;
	margin: 0;
`

export default Layout
