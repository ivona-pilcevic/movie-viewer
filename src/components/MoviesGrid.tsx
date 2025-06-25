import React from 'react'
import styled from 'styled-components'
import { SPACES } from '../styles/spaces'
import { Col, Row } from 'antd'
import type { IMovie } from '../features/movies/types/types'
import MovieCard from './MovieCard'
import { dateFormat } from '../utils/dateFormat'
import { getPosterUrl } from '../features/movies/utils/getPosterUrl'
import { getRatingById } from '../features/movies/utils/getRatingById'

interface IProps {
	movies: IMovie[]
	favorites: number[]
	selectedIndex: number
	setSelectedIndex: (value: React.SetStateAction<number>) => void
	toggleFavorite: (index: number) => void
}

const MoviesGrid: React.FC<IProps> = ({
	movies,
	favorites,
	selectedIndex,
	setSelectedIndex,
	toggleFavorite,
}) => {
	return (
		<GridWrapper>
			<Row gutter={[24, 24]} justify="start" align="middle">
				{movies?.map((movie, i) => (
					<Col key={`${movie.id}_${i}`} xs={24} sm={12} md={8} lg={6} xl={4}>
						<div data-index={i}>
							<MovieCard
								title={movie.title}
								releaseDate={dateFormat(movie.releaseDate)}
								posterUrl={getPosterUrl(movie.posterPath)}
								rating={getRatingById(movie.ratings, 'imdb')}
								popularity={getRatingById(movie.ratings, 'popularity')}
								inFavorites={favorites.includes(movie.id)}
								selected={selectedIndex === i}
								onClick={() => setSelectedIndex(i)}
								onToggleFavorite={() => toggleFavorite(movie.id)}
							/>
						</div>
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

export default MoviesGrid
