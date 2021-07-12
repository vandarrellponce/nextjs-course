// our-domain.com/new-meetup

import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Head from 'next/head'

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
  return (
    <div>
      <Head>
        <title>VDP React Meetups - Add New Meetup</title>
        <meta name="description" content="Browse a place to go by VDP" />
      </Head>

      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  )
}

export default NewMeetupPage
