import { ERatingKey, ESortOrder, type IMovie } from '../types/types'
import { getRatingById } from './getRatingById'

export const sortByRating = (
	movies: IMovie[],
	ratingKey: ERatingKey = ERatingKey.Imdb,
	order: ESortOrder = ESortOrder.Desc,
): IMovie[] => {
	return [...movies].sort((a, b) => {
		const aVal = getRatingById(a.ratings, ratingKey)
		const bVal = getRatingById(b.ratings, ratingKey)
		return order === ESortOrder.Asc ? aVal - bVal : bVal - aVal
	})
}
