import MeetupList from '../components/meetups/MeetupList'

import { MongoClient } from 'mongodb'

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />
}

export const getStaticProps = async () => {
  // fetch data from api or database

  // get data directly from database
  try {
    const client = await MongoClient.connect(
      'mongodb+srv://darrell:admin12345@cluster0.reoms.mongodb.net/react-meetup?retryWrites=true&w=majority',
      { useUnifiedTopology: true }
    )
    const db = client.db()
    const meetupCollections = db.collection('meetups')
    const meetups = await meetupCollections.find({}).toArray()

    if (!meetups) throw new Error('something went wrong')

    client.close()

    return {
      props: {
        meetups: meetups.map((meetup) => {
          return {
            title: meetup.title,
            image: meetup.image,
            address: meetup.address,
            description: meetup.description,
            id: meetup._id.toString(),
          }
        }),
      },
      revalidate: 1,
    }
  } catch (error) {
    console.log(error.message)
  }
}

/* export const getServerSideProps = async (context) => {
  const req = context.req
  const res = context.res
  // fetch data from api or database
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  }
} */

export default HomePage
