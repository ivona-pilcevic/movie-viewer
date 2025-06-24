import axios from 'axios'
import applyCaseMiddleware from 'axios-case-converter'

const axiosInt = applyCaseMiddleware(
	axios.create({
		baseURL: '/',
		headers: {
			'Content-Type': 'application/json',
		},
	}),
)

export default axiosInt
