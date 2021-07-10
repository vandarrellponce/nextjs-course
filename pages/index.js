import MeetupList from '../components/meetups/MeetupList'

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
      'https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/city-skyline-of-Sydney-Australia.jpg',
    address: 'some address',
    description: 'this is the second meetup meetup',
  },
]

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />
}

export const getStaticProps = async () => {
  // fetch data from api or database

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  }
}

export default HomePage
