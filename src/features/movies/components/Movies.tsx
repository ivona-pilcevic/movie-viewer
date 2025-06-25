import { useMemo, useState } from 'react'
import { Empty, Typography } from 'antd'

import useFetchMovies from '../hooks/api/useFetchMovies'
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import { useScrollIntoView } from '../hooks/useScrollIntoView'

import { removeDuplicates } from '../utils/removeDuplicates'
import { sortByRating } from '../utils/sortByRating'

import { ERatingKey, ESortOrder } from '../types/types'

import GlobalLoader from '../../../components/common/GlobalLoader'
import MoviesGrid from '../../../components/MoviesGrid'
import SortControls from '../../../components/SortControls'

import { COLORS } from '../../../styles/colors'

const BATCH = 50

const Movies = () => {
	const { movies, isFetchingMovies, isLoadingMovies } = useFetchMovies()

	const [displayCount, setDisplayCount] = useState(BATCH)

	const [ratingKey, setRatingKey] = useState<ERatingKey>(ERatingKey.Imdb)
	const [order, setOrder] = useState<ESortOrder>(ESortOrder.Desc)

	const deduplicatedMovies = useMemo(() => removeDuplicates(movies ?? []), [movies])
	const sortedMovies = useMemo(
		() => sortByRating(deduplicatedMovies, ratingKey, order),
		[deduplicatedMovies, ratingKey, order],
	)

	const { selectedIndex, setSelectedIndex, favorites, toggleFavorite } =
		useKeyboardNavigation(sortedMovies)

	useScrollIntoView(selectedIndex)

	const loaderRef = useInfiniteScroll(
		() => setDisplayCount((c) => Math.min(c + BATCH, sortedMovies.length)),
		displayCount < sortedMovies.length,
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

	const visibleMovies = sortedMovies.slice(0, displayCount)

	return (
		<div>
			<SortControls
				ratingKey={ratingKey}
				setRatingKey={setRatingKey}
				order={order}
				setOrder={setOrder}
			/>
			<MoviesGrid
				movies={visibleMovies}
				favorites={favorites}
				selectedIndex={selectedIndex}
				setSelectedIndex={setSelectedIndex}
				toggleFavorite={toggleFavorite}
			/>
			<div ref={loaderRef} style={{ height: 1 }} />
		</div>
	)
}

export default Movies
