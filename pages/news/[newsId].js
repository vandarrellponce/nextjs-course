import { useRouter } from 'next/router'

// our-domain.com/news/[newsId]

const DetailPage = () => {
	const newsId = useRouter().query.newsId

	// send a request to the backend API
	// to fetch the news item with newsId

	return <h1>The Detail Page </h1>
}

export default DetailPage
