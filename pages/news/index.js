// our-domain.com/news

import { Fragment, useState } from 'react'
import Link from 'next/link'

const NewsPage = () => {
	const [news, setNews] = useState([])

	return (
		<Fragment>
			<h1> This is the News Page </h1>
			<ul>
				<li>
					<Link href={`/news/id1`}> News 1</Link>
				</li>
				<li>
					<Link href={`/news/id2`}> News 2</Link>
				</li>
			</ul>
		</Fragment>
	)
}

export default NewsPage
