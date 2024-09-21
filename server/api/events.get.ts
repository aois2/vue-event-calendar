import { connectToDatabase } from '~/plugins/mongodb';

export default defineEventHandler(async (event) => {
  const { db } = await connectToDatabase();
  const collection = db.collection('events');
  const events = await collection.find({}).toArray();

  return {
    success: true,
    data: events,
  };
});
