// our-domain.com/new-meetup

import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
  const router = useRouter()
  const addMeetupHandler = async (data) => {
    const res = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const result = await res.json()
    console.log(result.message)
    router.push('/')
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage
