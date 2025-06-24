export interface IMovie {
	adult: boolean
	backdropPath?: string
	genreIds: number[]
	id: number
	originalLanguage: string
	originalTitle: string
	overview: string
	posterPath?: string
	title: string
	video: boolean
	ratings: IRating[]
}

interface IRating {
	id: string
	rating: number
}
