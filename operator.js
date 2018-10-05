//it will show the items whitch are greater than 200rs.
//$gt  >, $lt  <, $eq ==,$gte >=,$lte  <=
db.item.find({"price":{$gt:200}}).count();

//it will show price and name the items which it less than 200.
db.item.find({"price":{$lt:200}},{"_id":0,"name":true,"price":true}).pretty();

//equal can do normally and with operator.
db.item.find({"price":{$eq:200}},{"_id":0,"name":true,"price":true}).pretty();

//greater than equal to.
db.item.find({"price":{$gte:200}},{"_id":0,"name":true,"price":true}).pretty();

//less than eqaul to.
db.item.find({"price":{$lte:200}},{"_id":0,"name":true,"price":true}).pretty();

//greater than 200 and less than 400.
db.item.find({"price":{$lt:400,$gt:200}},{"_id":0,"name":true,"price":true}).pretty();


//$and $or
db.item.find({
	$or:[
	{"price":200},
	{"type":"donut"}
	]
}).pretty();


//or on two condition
db.item.find({
	$or:[
	{"price":{$lt:400,$gt:200}},
	{"price":{$lt:300,$gt:100}}
	]
},{"_id":0,"name":true,"price":true}).pretty();



//sorting according to price in decending.for ascending 1.
db.item.find({
	$or:[
	{"price":{$lt:400,$gt:200}},
	{"price":{$lt:300,$gt:100}}
	]
},{"_id":0,"name":true,"price":true}).pretty().sort({"price":-1});

//and on two
db.item.find({
	$and:[
	{"price":{$lt:400,$gt:200}},
	{"price":{$lt:300,$gt:100}}
	]
},{"_id":0,"name":true,"price":true}).pretty();

//top 2 records will show.
db.item.find().pretty().limit(2);

//it will skip that record.
db.item.find().pretty().skip(2);