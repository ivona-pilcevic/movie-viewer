import type { IMovie } from '../types/types'
import { getRatingById } from './getRatingById'

export const sortByRatingDesc = (movies: IMovie[], ratingKey: string): IMovie[] => {
	return [...movies].sort((a, b) => {
		const ratingA = getRatingById(a.ratings, ratingKey) ?? 0
		const ratingB = getRatingById(b.ratings, ratingKey) ?? 0
		return ratingB - ratingA
	})
}
