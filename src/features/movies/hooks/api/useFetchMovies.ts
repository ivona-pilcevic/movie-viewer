import { useQuery } from '@tanstack/react-query'
import type { IMovie } from '../../types/types'
import { FETCH_MOVIES_KEY, fetchMovies } from '../../utils/api'

const useFetchMovies = () => {
	const {
		isLoading: isLoadingMovies,
		error: errorFetchingMovies,
		data: movies,
		isFetching: isFetchingMovies,
	} = useQuery<IMovie[], any>({
		queryKey: [FETCH_MOVIES_KEY],
		queryFn: fetchMovies,
	})

	return {
		isLoadingMovies,
		errorFetchingMovies,
		movies,
		isFetchingMovies,
	}
}

export default useFetchMovies
