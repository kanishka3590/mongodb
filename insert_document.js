db.item.insert({
	"name" : "chocolava cake",
	"type" : "cake",
	"price" : 200,
	"isVeg": true,
	"size" : "1kg",
	"manDate": "12-12-18",
	"expDate" : "18-12-18",
	"stock" : 20,
	"ingredients" :[
		{
		type : "base-ing",
		values : ["white Flour","Baking soda","coco powder"]
		},
		{
		type : "adv-ing",
		values : ["Red rose","Honey","White coco"]
		}]
})



//Multiple data insert.
db.item.insert([{
	"name" : "sanditch",
	"type" : "bread",
	"price" : 210,
	"isVeg": true,
	"size" : "500gm",
	"manDate": "12-12-18",
	"expDate" : "18-12-18",
	"stock" : 20,
	"ingredients" :[
		{
		type : "base-ing",
		values : ["white Flour","Baking soda","milk powder"]
		},
		{
		type : "adv-ing",
		values : ["Red rose","Honey","White coco"]
		}]
},{
	"name" : "bread",
	"type" : "bread",
	"price" : 100,
	"isVeg": false,
	"size" : "1",
	"manDate": "12-12-18",
	"expDate" : "18-12-18",
	"stock" : 20,
	"ingredients" :[
		{
		type : "base-ing",
		values : ["white Flour","Baking soda","milk powder"]
		},
		{
		type : "adv-ing",
		values : ["Red rose","Honey","White coco"]
		}]
}])



//Insert only one
db.item.insertOne({
	"name" : "cake",
	"type" : "cake",
	"price" : 100,
	"isVeg": true,
	"size" : "1kg",
	"manDate": "12-12-18",
	"expDate" : "18-12-18",
	"stock" : 20,
	"ingredients" :[
		{
		type : "base-ing",
		values : ["white Flour","Baking soda","coco powder"]
		},
		{
		type : "adv-ing",
		values : ["Red rose","Honey","White coco"]
		}]
})


//insert many
db.item.insertMany([{
	"name" : "pizza",
	"type" : "bread",
	"price" : 250,
	"isVeg": false,
	"size" : "500gm",
	"manDate": "12-12-18",
	"expDate" : "18-12-18",
	"stock" : 20,
	"ingredients" :[
		{
		type : "base-ing",
		values : ["white Flour","milk powder"]
		},
		{
		type : "adv-ing",
		values : ["Honey","White coco"]
		}]
},{
	"name" : "burger",
	"type" : "bread",
	"price" : 150,
	"isVeg": false,
	"size" : "50gm",
	"manDate": "12-12-18",
	"expDate" : "18-12-18",
	"stock" : 20,
	"ingredients" :[
		{
		type : "base-ing",
		values : ["white Flour","Baking soda","milk powder"]
		},
		{
		type : "adv-ing",
		values : ["Red rose","Honey","White coco"]
		}]
}]);


//we can skip any field.dynamic schema.
db.item.insertMany([{
	"name" : "durga-donut",
	"type" : "donut",
	"price" : 250,
	"isVeg": false,
	"size" : "500gm",
	"manDate": "12-12-18",
	"expDate" : "18-12-18",
	"stock" : 20,
}]);

//we can even change the type of any value.
db.item.insertMany([{
	"name" : 1234,
	"type" : true,
	"price" : "a",
	"isVeg": false,
	"size" : "500gm",
	"manDate": "12-12-18",
	"expDate" : "18-12-18",
	"stock" : [],
}]);


//all items will show
db.item.find();

//all items will show in good manner
db.item.find().pretty();

//to search perticular item
db.item.find({"name" : 1234}).pretty();

//total document count
db.item.find({}).count();