//one-one relationship
db.medusers.insertOne({
		"uid":100,
		"name":"john",
		"email":"miijk",
		"medicine":{"mid":"100gm","name":"para","composition":["abcd","mnbd"]}
});

//one to many relationship
db.medusers.insertOne({
		"uid":100,
		"name":"john",
		"email":"miijk",
		"medicine":[
			{"mid":"101gm","name":"2para","composition":["2abcd","mnbd"]},
			{"mid":"102gm","name":"3para","composition":["3abcd","mnbd"]}	]
});

db.medicines.insertOne({
	"mid":"103gm",
	"name":"3para",
	"composition":["abcd","mnbd"]
});

db.med.customer.insert({
	"uid":101,
		"name":"1john",
		"email":"1miijk",
		"medicines":[
			{"mid":"101gm"}]
});


//to show john data
db.med.customer.find({"name":"john"},{_id:0,medicines:1}).pretty();

//we can store it in a variable
var meds = db.med.customer.find({"name":"john"},{_id:0,medicines:1}).pretty();
meds;