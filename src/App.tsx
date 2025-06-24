import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Movies from './features/movies/components/Movies'
import Layout from './layout/Layout'

const queryClient = new QueryClient({
	defaultOptions: { queries: { retry: 0, refetchOnWindowFocus: false } },
})

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>
				<Movies />
			</Layout>
		</QueryClientProvider>
	)
}

export default App
