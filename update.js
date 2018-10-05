//db.collectionName.update({filter/search},{update data});
//update one field
db.item.update(
	{
	"_id":ObjectId("5b6167cb5a8ba7af18fa0d34"),
	},{
	$set:{name:"free bread"}
	}
);

//update multiple fields
db.item.update(
	{
	"_id":ObjectId("5b6167cb5a8ba7af18fa0d34"),
	},{
	$set :{
	"type" : "bread",
        "price" : "free",
        "isVeg" : true,
        "size" : "5gm"
	}
});


//create new fiels inside existing document
db.item.update(
	{
	"_id":ObjectId("5b6167cb5a8ba7af18fa0d34"),
	},{
	$set:{
	"ingredients" : [
                {
                        "type" : "base-ing",
                        "values" : [
                                "white Flour",
                                "Baking soda",
                                "milk powder"
                        ]
                },
                {
                        "type" : "adv-ing",
                        "values" : [
                                "Red rose",
                                "Honey",
                                "White coco"
                        ]
                }
        ],"stock":150
	}
});

//bread type and greater than 200,update price
db.item.update({
	"type":"bread","price":{$gt:150}
	},{
	$set:{
	"price":200
	}
});