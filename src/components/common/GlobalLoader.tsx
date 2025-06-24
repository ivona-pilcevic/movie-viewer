import { Spin } from 'antd'

const GlobalLoader: React.FC = () => {
	return (
		<Spin
			size="large"
			style={{
				position: 'absolute',
				left: '50%',
				top: '50%',
				transform: 'translate(-50%, -50%)',
			}}
		/>
	)
}

export default GlobalLoader
