import {MongoClient} from "mongodb";
import {DB_CONNECTION_URL} from "../../../data/constants";

export default async function handler(req, res) {
  const slug = req.query.slug;

  const dbClient = await MongoClient.connect(DB_CONNECTION_URL)
  const db = dbClient.db();

  if (req.method === 'GET') {
    const comments = db.collection('comments')
      .find()
      .sort('date', -1).toArray();
    return res.status(200).json({ comments })
  }

  if (req.method === 'POST') {
    const {email, name, text} = req.body;

    if (!text.trim()) {
      return res.status(422).json({message: 'invalid input.'});
    }

    const newComment = {
      slug,
      date: new Date().toISOString(),
      email,
      name,
      text
    }
    await db.collection('comments').insertOne(newComment);
    res.status(201).json({message: 'success', comment: newComment});
  }

  if (req.method === 'GET') {

  }
}
