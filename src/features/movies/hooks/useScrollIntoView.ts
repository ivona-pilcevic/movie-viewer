import { useEffect } from 'react'

export function useScrollIntoView(selectedIndex: number) {
	useEffect(() => {
		const el = document.querySelector<HTMLElement>(`[data-index="${selectedIndex}"]`)
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
		}
	}, [selectedIndex])
}
