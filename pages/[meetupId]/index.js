import MeetupDetail from '../../components/meetups/MeetupDetail'

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

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId
  return {
    props: {
      meetupData: {
        image:
          'https://www.planetware.com/wpimages/2019/10/asia-best-places-to-visit-mount-fuji-japan.jpg',
        title: 'a title',
        address: 'this is an address',
        description: 'descriptionssss',
      },
    },
  }
}

export default MeetupDetails
