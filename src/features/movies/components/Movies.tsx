import { Empty, Typography } from 'antd'

import useFetchMovies from '../hooks/api/useFetchMovies'

import GlobalLoader from '../../../components/common/GlobalLoader'
import { COLORS } from '../../../styles/colors'

import { removeDuplicates } from '../utils/removeDuplicates'
import { sortByRatingDesc } from '../utils/sortByRating'
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation'
import MoviesGrid from '../../../components/MoviesGrid'

const Movies = () => {
	const { movies, isFetchingMovies, isLoadingMovies } = useFetchMovies()

	const deduplicatedMovies = removeDuplicates(movies || [])
	const sortedMovies = sortByRatingDesc(deduplicatedMovies, 'imdb')

	const { selectedIndex, setSelectedIndex, favorites, toggleFavorite } = useKeyboardNavigation(
		sortedMovies?.length,
	)

	if (isLoadingMovies || isFetchingMovies) return <GlobalLoader />
	if (!movies)
		return (
			<Empty
				description={
					<Typography.Text style={{ color: COLORS.WHITE }}>No movies to display.</Typography.Text>
				}
				image={Empty.PRESENTED_IMAGE_SIMPLE}
			/>
		)

	return (
		<MoviesGrid
			movies={sortedMovies}
			favorites={favorites}
			selectedIndex={selectedIndex}
			setSelectedIndex={setSelectedIndex}
			toggleFavorite={toggleFavorite}
		/>
	)
}

export default Movies
