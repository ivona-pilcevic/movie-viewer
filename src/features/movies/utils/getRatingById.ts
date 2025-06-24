import type { IRating } from '../types/types'

export const getRatingById = (ratings: IRating[], id: string, defaultValue = 0): number => {
	const ratingObj = ratings.find((r) => r.id === id)
	return ratingObj?.rating ?? defaultValue
}
