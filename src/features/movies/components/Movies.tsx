import MovieCard from '../../../components/MovieCard'
import useFetchMovies from '../hooks/useFetchMovies'
import GlobalLoader from '../../../components/common/GlobalLoader'

const Movies = () => {
	const { movies, isFetchingMovies, isLoadingMovies } = useFetchMovies()

	if (isLoadingMovies || isFetchingMovies) return <GlobalLoader />

	return <MovieCard />
}

export default Movies
