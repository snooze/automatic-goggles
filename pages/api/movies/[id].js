import { connectToDatabase } from '../../../util/mongodb';
import { ObjectId } from 'mongodb';

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const o_id = ObjectId(req.query.id);

  const movies = await db
    .collection("movies")
    .findOne({ _id: o_id })

  res.json(movies);
};

