db.myBank.employee.insert({
	"empName" : "shemu",
	"empDept" : "branch manager",
	"sal" : 90000,
	"gender": "male",
	"age" : 52,
	"joinDate": "12-12-18",
	"retirementDate" : "18-12-18",
});

db.myBank.user.insert({
	"name" : "nom",
	"accountNo" : 987,
	"phone" : 999999999,
	"age" : 45,
	"address" : "hyd",
	"accountType" : "current",
	"amount" : 90000,	
});

db.myBank.bank.insert({
	"bankName" : "syndi",
	"bankType" : "government",
	"location" : "miya",
	"headquater" : "hyd",
	"manger" : "john",
	"noOfEmployee" : 20,	
});

db.myBank.payment.insert({
	"paymentType" : "widraw",
	"amount" : 2000,
	"balance": 10000,
	"mode" : "online",
});



//top 10 salary in decending order.
db.myBank.employee.find({},{"empName":1,"sal":1,"_id":0}).pretty().sort({"sal":-1}).limit(10);

//5employee who has salary greater than 50,000.lowest to highest
db.myBank.employee.find({"sal":{$gt:50000}},{"empName":1,"sal":1,"_id":0}).pretty().sort({"sal":1}).limit(5);

//highest salary
db.myBank.employee.find().pretty().sort({"sal":-1}).limit(1);

//second highest salary
db.myBank.employee.find().pretty().sort({"sal":-1}).skip(1).limit(1);

//highest amount top 10.
db.myBank.user.find({},{"name":1,"_id":0,"amount":1}).sort({"amount":1}).limit(10);

//highest amount
db.myBank.user.find({},{"name":1,"_id":0,"amount":1}).sort({"amount":-1}).limit(1);

//second highest
db.myBank.user.find({},{"name":1,"_id":0,"amount":1}).sort({"amount":-1}).skip(1).limit(1);

//lowest
db.myBank.user.find({},{"name":1,"_id":0,"amount":1}).sort({"amount":1}).limit(1);

//second lowest
db.myBank.user.find({},{"name":1,"_id":0,"amount":1}).sort({"amount":1}).skip(1).limit(1);

db.myBank.user.update(
	{
	"_id":ObjectId("5b631a78bfb8e079214e6fd9"),
	},{
	$set:{
	"paymentId":ObjectId("5b654459fffde85facfa2091")
	}
});
