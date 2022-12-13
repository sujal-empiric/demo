import database from '../../../components/database'
export default async function handler(req, res) {
    const body = req.body
    console.log(body)
    const result = await database(async (client, db) => {
    const res = await db.collection("users").updateOne({"email":body.email},{$set:{wallet:body.wallet}});
    console.log(res)
    return {authenticate:false};
  });
  res.status(200).json(result);
}