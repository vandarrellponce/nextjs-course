import MeetupList from '../components/meetups/MeetupList'
import Layout from '../components/layout/Layout'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A first meetup',
    image:
      'https://www.planetware.com/wpimages/2019/10/asia-best-places-to-visit-mount-fuji-japan.jpg',
    address: 'some address',
    description: 'this is a first meetup',
  },
  {
    id: 'm2',
    title: 'A second meetup',
    image:
      'https://www.planetware.com/wpimages/2019/10/asia-best-places-to-visit-mount-fuji-japan.jpg',
    address: 'some address',
    description: 'this is the second meetup meetup',
  },
]

const HomePage = () => {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  )
}

export default HomePage
