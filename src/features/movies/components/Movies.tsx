import { Empty, Typography } from 'antd'

import useFetchMovies from '../hooks/api/useFetchMovies'

import GlobalLoader from '../../../components/common/GlobalLoader'
import { COLORS } from '../../../styles/colors'

import { removeDuplicates } from '../utils/removeDuplicates'
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation'
import MoviesGrid from '../../../components/MoviesGrid'
import { sortByRating } from '../utils/sortByRating'
import { useMemo, useState } from 'react'
import { ERatingKey, ESortOrder } from '../types/types'
import SortControls from '../../../components/SortControls'

const Movies = () => {
	const { movies, isFetchingMovies, isLoadingMovies } = useFetchMovies()

	const [ratingKey, setRatingKey] = useState<ERatingKey>(ERatingKey.Imdb)
	const [order, setOrder] = useState<ESortOrder>(ESortOrder.Desc)

	const deduplicatedMovies = useMemo(() => removeDuplicates(movies ?? []), [movies])
	const sortedMovies = useMemo(
		() => sortByRating(deduplicatedMovies, ratingKey, order),
		[deduplicatedMovies, ratingKey, order],
	)

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
		<div>
			<SortControls
				ratingKey={ratingKey}
				setRatingKey={setRatingKey}
				order={order}
				setOrder={setOrder}
			/>
			<MoviesGrid
				movies={sortedMovies}
				favorites={favorites}
				selectedIndex={selectedIndex}
				setSelectedIndex={setSelectedIndex}
				toggleFavorite={toggleFavorite}
			/>
		</div>
	)
}

export default Movies
