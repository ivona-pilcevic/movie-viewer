import { useEffect, useRef, useCallback } from 'react'

export function useInfiniteScroll(loadMore: () => void, hasMore: boolean, threshold = 1.0) {
	const sentinelRef = useRef<HTMLDivElement>(null)

	const onIntersect = useCallback<IntersectionObserverCallback>(
		([entry]) => {
			if (entry.isIntersecting && hasMore) {
				loadMore()
			}
		},
		[hasMore, loadMore],
	)

	useEffect(() => {
		const node = sentinelRef.current
		if (!node) return

		const observer = new IntersectionObserver(onIntersect, { threshold })
		observer.observe(node)
		return () => observer.disconnect()
	}, [onIntersect, threshold])

	return sentinelRef
}
