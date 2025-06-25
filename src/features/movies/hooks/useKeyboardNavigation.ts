import { useEffect, useState } from 'react'
import type { IMovie } from '../types/types'
import LocalStorage from '../../../utils/LocalStorage'

export const useKeyboardNavigation = (movies: IMovie[]) => {
	const length = movies.length
	const [selectedIndex, setSelectedIndex] = useState<number>(-1)

	const [favorites, setFavorites] = useState<number[]>(() => {
		const saved = LocalStorage.get('favorites')
		return Array.isArray(saved) ? saved : []
	})

	const toggleFavorite = (id: number) => {
		setFavorites((prev) => {
			const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
			LocalStorage.set('favorites', next)
			return next
		})
	}

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			const cols = 6

			switch (event.key) {
				case 'ArrowRight':
					event.preventDefault()
					setSelectedIndex((prev) => (prev + 1) % length)
					break
				case 'ArrowLeft':
					event.preventDefault()
					setSelectedIndex((prev) => (prev - 1 + length) % length)
					break
				case 'ArrowDown':
					event.preventDefault()
					setSelectedIndex((prev) => (prev + cols < length ? prev + cols : prev))
					break
				case 'ArrowUp':
					event.preventDefault()
					setSelectedIndex((prev) => (prev - cols >= 0 ? prev - cols : prev))
					break
				case 'Enter':
					event.preventDefault()
					const movie = movies[selectedIndex]
					if (movie) toggleFavorite(movie.id)
					break
			}
		}
		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [length, selectedIndex, movies])

	return {
		selectedIndex,
		setSelectedIndex,
		favorites,
		toggleFavorite,
	}
}
