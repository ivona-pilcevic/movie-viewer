const BASE_URL = 'https://image.tmdb.org/t/p/'
const SIZE = 'w500'

export const getPosterUrl = (path?: string) => {
	if (!path) return '/fallback-poster.png'
	return `${BASE_URL}${SIZE}${path}`
}
