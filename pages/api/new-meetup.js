// api/new-meetup

import { MongoClient } from 'mongodb'

const handler = async (req, res) => {
  if (req.method == 'POST') {
    try {
      const client = await MongoClient.connect(
        'mongodb+srv://darrell:admin12345@cluster0.reoms.mongodb.net/react-meetup?retryWrites=true&w=majority',
        { useUnifiedTopology: true }
      )
      // adding item to collection
      const db = client.db()

      const meetupCollection = db.collection('meetups')
      const result = await meetupCollection.insertOne(req.body)

      console.log(result.insertedId)

      client.close()

      res.status(201).json({ message: 'inserted' })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export default handler
