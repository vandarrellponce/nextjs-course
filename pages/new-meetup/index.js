// our-domain.com/new-meetup

import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Layout from '../../components/layout/Layout'

const NewMeetupPage = () => {
  const addMeetupHandler = (data) => {
    console.log(data)
  }
  return (
    <Layout>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Layout>
  )
}

export default NewMeetupPage
