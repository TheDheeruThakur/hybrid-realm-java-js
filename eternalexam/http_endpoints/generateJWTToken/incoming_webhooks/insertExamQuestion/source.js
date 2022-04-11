exports = async function(payload, response) {
  // Convert the webhook body from BSON to an EJSON object
  const body = EJSON.parse(payload.body.text());

  // Execute application logic, such as working with MongoDB
  if(body.quesId) {
    const mdb = context.services.get('mongodb-atlas');
    const requests = mdb.db("eternal_exam").collection("questions")
    const payload = {
      quesId: body.quesId,
      quesSkill:body.quesSkill,
      quesName: body.quesName,
      quesDetails: body.quesDetails,
      quesType: body.quesType,
      quesChoices: body.quesChoices,
      quesScore: body.quesScore,
      
    };
    const { insertedId } = await requests.updateMany({quesId: body.quesId }, { $set: payload }, { upsert: true});
    // Respond with an affirmative result
    
//     db.products.updateMany(
//     { _id: 6 },
//     { $set: {price: 999} },
//     { upsert: true}
// )
    
    
    
    response.setStatusCode(200)
    response.setBody(`Successfully saved "questionId" with _id: ${insertedId}.`);
  } else {
    // Respond with a malformed request error
    response.setStatusCode(400)
    response.setBody(`Could not find "questionId" in the request body.`);
  }
  // This return value does nothing because we already modified the response object.
  // If you do not modify the response object and you enable *Respond with Result*,
  // Realm will include this return value as the response body.
  return { msg: "finished!" };
}
