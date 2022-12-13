// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import database from "../../../components/database";
export default async function handler(req, res) {
  const result = await database(async (client, db) => {
    const res = await db.collection("users").find().toArray();
    await client.close()
    return res; 
  });
  res.status(200).json(result);
}
