import { Col, Empty, Row, Typography } from 'antd'
import styled from 'styled-components'

import useFetchMovies from '../hooks/useFetchMovies'

import MovieCard from '../../../components/MovieCard'
import GlobalLoader from '../../../components/common/GlobalLoader'
import { COLORS } from '../../../styles/colors'
import { SPACES } from '../../../styles/spaces'
import { dateFormat } from '../../../utils/dateFormat'
import { removeDuplicates } from '../utils/removeDuplicates'
import { getPosterUrl } from '../utils/getPosterUrl'
import { sortByRatingDesc } from '../utils/sortByRating'
import { getRatingById } from '../utils/getRatingById'

const Movies = () => {
	const { movies, isFetchingMovies, isLoadingMovies } = useFetchMovies()

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

	const deduplicatedMovies = removeDuplicates(movies)
	const sortedMovies = sortByRatingDesc(deduplicatedMovies)

	return (
		<GridWrapper>
			<Row gutter={[24, 24]} justify="center" align="middle">
				{sortedMovies.map((movie, i) => (
					<Col key={`${movie.id}_${i}`} xs={24} sm={12} md={8} lg={6} xl={4}>
						<MovieCard
							title={movie.title}
							releaseDate={dateFormat(movie.releaseDate)}
							posterUrl={getPosterUrl(movie.posterPath)}
							rating={getRatingById(movie.ratings, 'imdb')}
							popularity={getRatingById(movie.ratings, 'popularity')}
							inFavorites={false}
							selected={false}
						/>
					</Col>
				))}
			</Row>
		</GridWrapper>
	)
}

const GridWrapper = styled.div`
	max-width: 95%;
	margin: 0 auto;
	padding: ${SPACES.LARGE} 0;
`

export default Movies
