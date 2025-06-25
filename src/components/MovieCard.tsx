import { HeartFilled, HeartOutlined, StarFilled, UserOutlined } from '@ant-design/icons'
import styled, { css, keyframes } from 'styled-components'
import { COLORS } from '../styles/colors'
import { SPACES } from '../styles/spaces'
import { Tooltip } from 'antd'

interface IProps {
	title: string
	releaseDate: string | null
	posterUrl: string
	rating: number
	popularity: number
	inFavorites: boolean
	selected: boolean
	onToggleFavorite: () => void
	onClick: () => void
}

const MovieCard: React.FC<IProps> = ({
	title,
	releaseDate,
	posterUrl,
	rating,
	popularity,
	inFavorites,
	selected,
	onToggleFavorite,
	onClick,
}) => {
	return (
		<Wrapper onClick={onClick} $selected={selected}>
			<Poster src={posterUrl} alt={title} />
			<Info>
				<Tooltip title={title.length > 20 ? title : undefined}>
					<Title>{title}</Title>
				</Tooltip>
				<Date>{releaseDate}</Date>
				<Footer>
					<Rating>
						<div>
							<StarFilled style={{ color: COLORS.YELLOW }} /> {rating}
						</div>
						<div>
							<UserOutlined /> {popularity}
						</div>
					</Rating>

					<FavoriteIcon
						animate={inFavorites}
						onClick={(e) => {
							e.stopPropagation()
							onToggleFavorite?.()
						}}
					>
						{inFavorites ? (
							<HeartFilled style={{ color: COLORS.HIGHLIGHT }} />
						) : (
							<HeartOutlined style={{ color: COLORS.GRAY }} />
						)}
					</FavoriteIcon>
				</Footer>
			</Info>
		</Wrapper>
	)
}

export const Wrapper = styled.div<{ $selected: boolean }>`
	width: 100%;
	border-radius: ${SPACES.SMALL};
	overflow: hidden;
	background-color: #1f2937;
	color: ${COLORS.WHITE};
	cursor: pointer;
	transition: transform 0.2s ease, box-shadow 0.2s ease;
	user-select: none;
	outline: none;
	height: 425px;

	${({ $selected }) =>
		$selected &&
		css`
			transform: scale(1.03);
			box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
		`}

	&:hover {
		transform: scale(1.03);
		box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
	}
`

export const Poster = styled.img`
	width: 100%;
	height: 300px;
	object-fit: cover;
	display: block;
`

export const Info = styled.div`
	padding: ${SPACES.SMALL};
	display: flex;
	flex-direction: column;
	gap: 6px;
	height: 120px;
	justify-content: space-between;
`

export const Title = styled.h3`
	margin: 0;
	font-size: 1rem;
	font-weight: 600;
	color: ${COLORS.WHITE};

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

export const Date = styled.span`
	font-size: 0.85rem;
	color: ${COLORS.GRAY};
`

export const Footer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 4px;
`

export const Rating = styled.div`
	display: flex;
	align-items: center;
	gap: ${SPACES.SMALL};
	font-size: 0.9rem;
`

export const FavoriteIcon = styled.div<{ animate?: boolean }>`
	font-size: 1.2rem;
	cursor: pointer;

	${({ animate }) =>
		animate &&
		css`
			animation: ${pop} 0.4s ease;
		`}
`

const pop = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.4); }
  100% { transform: scale(1); }
`

export default MovieCard
