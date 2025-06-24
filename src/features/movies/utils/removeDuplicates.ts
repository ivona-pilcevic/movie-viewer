import type { IMovie } from '../types/types'

export const removeDuplicates = (movies: IMovie[]): IMovie[] => {
	const movieSet = new Set<string>()

	return movies?.filter((movie) => {
		const key = `${movie.id}`
		if (movieSet.has(key)) {
			return false
		}
		movieSet.add(key)
		return true
	})
}
