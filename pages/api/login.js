import database from '../../components/database'
export default async function handler(req, res) {
    const body = req.body
  const result = await database(async (client, db) => {
    const res = await db.collection("users").find({"email":body.email}).toArray();
    console.log(res[0].password==body.pass)
    if(res[0].password==body.pass){
        await client.close() 
        return {authenticate:true, email:res[0].email}
    }
    await client.close() 
    return {authenticate:false}; 
  });
  res.status(200).json(result);
}