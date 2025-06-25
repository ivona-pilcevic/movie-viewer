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
	releaseDate: string
}

export interface IRating {
	id: string
	rating: number
}

export enum ERatingKey {
	Imdb = 'imdb',
	Popularity = 'popularity',
}

export enum ESortOrder {
	Asc = 'asc',
	Desc = 'desc',
}
