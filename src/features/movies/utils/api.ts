import axiosInt from '../../../utils/axios'

export const FETCH_MOVIES_KEY = 'fetchMovies'
export const fetchMovies = async () => {
	const response = await axiosInt.get('/movies.json')
	return response.data
}
