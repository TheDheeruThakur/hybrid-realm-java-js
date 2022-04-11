exports = function(payload, response) {
  const reqCollection = "questions"; 
  let modifiedQuery;
  const query = EJSON.parse(payload.body.text())
  if(query.id){
    modifiedQuery = {_id:BSON.ObjectId(query.id)};
  } else{
    modifiedQuery = query;
  }
  

   const doc = context.services.get("mongodb-atlas").db("eternal_exam").collection(reqCollection);
    doc.find(modifiedQuery).limit(100).toArray().then(docs => {
      response.setStatusCode(200);
      response.setHeader(
        "Content-Type",
        "application/json"
      );
      response.setBody(JSON.stringify(docs));
    });
}