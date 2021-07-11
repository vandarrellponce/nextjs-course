import MeetupDetail from '../../components/meetups/MeetupDetail'
import { MongoClient, ObjectId } from 'mongodb'

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  )
}

export const getStaticPaths = async () => {
  try {
    const client = await MongoClient.connect(
      'mongodb+srv://darrell:admin12345@cluster0.reoms.mongodb.net/react-meetup?retryWrites=true&w=majority',
      { useUnifiedTopology: true }
    )
    const db = client.db()
    const meetupCollections = db.collection('meetups')
    const meetups = await meetupCollections.find({}).toArray()

    client.close()

    return {
      paths: meetups.map((meetup) => {
        return {
          params: { meetupId: meetup._id.toString() },
        }
      }),
      fallback: false,
    }
  } catch (error) {
    console.log(error.message)
  }
}

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId

  const client = await MongoClient.connect(
    'mongodb+srv://darrell:admin12345@cluster0.reoms.mongodb.net/react-meetup?retryWrites=true&w=majority',
    { useUnifiedTopology: true }
  )
  const db = client.db()
  const meetupCollections = db.collection('meetups')
  const meetup = await meetupCollections.findOne({ _id: ObjectId(meetupId) })

  client.close()

  return {
    props: {
      meetupData: {
        title: meetup.title,
        description: meetup.description,
        address: meetup.address,
        image: meetup.image,
      },
    },
  }
}

export default MeetupDetails
