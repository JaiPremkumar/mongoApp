/* 

--------- GENERAL COMMANDS---------------
use codekate
// command used create and use database

codekate> db.collection
// use to create collection in db

codekate> db.collection.insertOne({"name":"vijay"})
//command used to insert value on db collection

codekate> db.collection.findOne()
//comand used to find value in db collection

codekate> db.collection.find()
//command used to find all value in db collection

codekate> db.collection.insertMany([{"name":"suriya","date":{"15oct-2020":{"task":"not-submit","attance":"absence"},31oct-2020:{"task":"not-submit"}}, topics:{[array,string,palindrome]},{"company_drives":5}{"mentor":5},{no.OfproblemSolve:35},{totalcodeProblem:200},
{"name":"vikram","date":{"15oct-2020":{"task":"not-submit","attance":"absence"},31oct-2020:{"task":"not-submit"}}, topics:{[array,string,palindrome]},{"company_drives":5}{"mentor":5},{no.OfproblemSolve:30},{totalcodeProblem:200},
{"name":"vijay","date":{"15oct-2020":{"task":"not-submit","attance":"absence"},31oct-2020:{"task":"not-submit"}}, topics:{[array,string,palindrome]},{"company_drives":5}{"mentor":5},{no.OfproblemSolve:40},{totalcodeProblem:200}])
// command used to insert multiple value on db

codekate> db.collection.findOne({"name":"vijay"})
//command used to particular value

codekate> db.collection.find({"date":{"15oct-2020",31oct-2020}})
//command used to find value filter by field

codekate> db.collection.updateOne({"name":"suriya"},{$set:{"date.15oct-2020.attence":"present"}})
//comand used to update particular data in db

codekate> db.collection.updateMany({"attence":"present"},{$set:{"data.15oct-2020.attence":"absence"}})
//command used to update all datas patricular field

codekate> db.collection.deleteOne({"name":"vijay"})
//command used to delete particular data in db

codekate> db.collection.deleteMany({"attence":"absence"})
//command delete the datas were the attence absence field

codekate> db.collection.find({"no.Ofproblem":{$gt:30}})
//command use no.Ofproblemsolve field greater than 30

-------------TASK COMMANDS------------------------

codekate> db.collection.topics.find({date:{$gte:ISODate("1-10-2020"),$lte:ISODate("31-10-2020")}})

codekate> db.collection.tasks.find({date::{$gte:ISODate("1-10-2020"),$lte:ISODate("31-10-2020")}})

codekate> db.collection.company_drives.find({date::{$gte:ISODate("1-10-2020"),$lte:ISODate("31-10-2020")}})

codekate> db.collection.company_drives.aggregate([{$look:{from:"user",localField:"drive_id",foreignField:"drive_id",
as:"studends"}},{$unwind:"$students"},{$match:{"students.placement_status":"appeared"}},{$project:{drive_name:1,
"students.user_name":1,"students.placement_status":1}}])

codekate> db.collection.aggregate([{$group:{_id:"$user_id",totalProblemSolved:{$sum:"$problems_solved"}}}])

codekate> db.collection.mentors.find({mentee_count:{$gt:15}})

codekate> db.collection.users.countDocuments({attendance:"absence".task_status:"not-submit",date:{$gte:ISODate("15-10-2020"),
$lte:ISODate("31-10-2020")}})





*/