// api/new-meetup

import { MongoClient } from 'mongodb'

const handler = async (req, res) => {
  if (req.method == 'POST') {
    try {
      const client = await MongoClient.connect(
        'MONGO_URI = mongodb+srv://darrell:admin12345@cluster0.reoms.mongodb.net/react-meetup?retryWrites=true&w=majority'
      )
      // adding item to collection
      const db = client.db()
      const meetupCollection = db.collection('meetups')
      const result = await meetupCollection.insertOne(request.body)
      console.log(result)
      client.close()

      res.status(201).json({ message: 'inserted' })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export default handler
