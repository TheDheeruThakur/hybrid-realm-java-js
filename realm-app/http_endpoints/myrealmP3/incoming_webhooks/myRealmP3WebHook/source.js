//Test using exports("fieldName": "pt_demo.language")
exports = async function(payload, response){
    const collection = context.services.get("mongodb-atlas").db("sample_restaurants").collection("restaurants");
    //console.log(String(fieldName) + "test");
    //JSON.parse(fieldName.body.text());
    const {fieldName} = payload.query;
    console.log("fieldName---"+fieldName);
    // return await collection.find(fieldName, JSON.parse('{}'));



//     return collection.aggregate([
//         {$match:JSON.parse(query)},
//         {$match:{"encounter_dt":{"$gte": new Date(begin), "$lte": new Date(end)}}},
//         {$project: JSON.parse(fields)},
//         {$sample: { size: Number(sampleCount)}}
//       ], {
//   allowDiskUse:true,
//   cursor:{}
// });
return await collection.find({"borough" : "Queens"}, JSON.parse('{}')).limit(1);

};
