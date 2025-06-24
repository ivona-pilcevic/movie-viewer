import type { IMovie } from '../types/types'

export const sortByRatingDesc = (movies: IMovie[]): IMovie[] => {
	return [...movies].sort((a, b) => {
		const ratingA = a.ratings?.[0]?.rating ?? 0
		const ratingB = b.ratings?.[0]?.rating ?? 0
		return ratingB - ratingA
	})
}
