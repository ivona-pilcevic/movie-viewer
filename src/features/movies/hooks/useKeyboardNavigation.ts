import { useEffect, useState } from 'react'

export const useKeyboardNavigation = (length: number) => {
	const [selectedIndex, setSelectedIndex] = useState(-1)
	const [favorites, setFavorites] = useState<number[]>([])

	const toggleFavorite = (index: number) => {
		setFavorites((prev) =>
			prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
		)
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
					toggleFavorite(selectedIndex)
					break
			}
		}
		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [length, selectedIndex])

	return {
		selectedIndex,
		setSelectedIndex,
		favorites,
		toggleFavorite,
	}
}
