db.webrank.insert({
		"website":"www.youtube.com",
		"visits":9998456,
		"category":"blogs"
});
db.webrank.insert({
		"website":"www.youtube.com",
		"visits":999456,
		"category":"mail"
});
db.webrank.insert({
		"website":"www.youtube.com",
		"visits":99256,
		"category":"chat"
});
db.webrank.insert({
		"website":"www.youtube.com",
		"visits":99456,
		"category":"search"
});
db.webrank.insert({
		"website":"www.youtube.com",
		"visits":999456,
		"category":"video"
});

//to count document for perticular website.
db.webrank.count({"website":"www.google.com"});

//distinct will show multiple unique values for perticular key.
db.webrank.distinct("category");
db.webrank.distinct("website");
db.webrank.distinct("website").length; //it will give total.because it is array so count will not work here.

//group by category
db.webrank.aggregate({$group:{_id:"$category",totalno:{$sum:1}}});

//total number of visits based on category
db.webrank.aggregate({$group:{_id:"$category",totalno:{$sum:"$visits"}}});

//total number of visits based on category
db.webrank.aggregate({$group:{_id:"$category",totalno:{$sum:"$visits"}}});

//average of visits based on category
db.webrank.aggregate({$group:{_id:"$category",avgno:{$avg:"$visits"}}},{$sort:{avgno:-1}});


//group then sorting
db.webrank.aggregate({
	$group:{_id:"$category",totalnumber:{$sum:1}}
},{$sort:{totalnumber:1}},{$limit:5},{$skip:1}
);

//match
db.webrank.aggregate({
	$match:{category:"blogs"}},
{	$group:{_id:"category",totalBlogVisits:{$sum:"$visits"}}
});           

//average of 1 then simple give the data for that field.
db.webrank.aggregate([
{$match:{website:"www.google.com"}},
{$group:{_id:"$category",avgno:{$avg:"$visits"}}},{$sort:{avgno:-1}}
]);        
//same 
db.webrank.find({website:"www.google.com"});

//for two.
db.webrank.aggregate([
{$match:{$or:[{website:"www.google.com"},{website:"www.facebook.com"}]}},
{$group:{_id:"$category",avgno:{$avg:"$visits"}}},{$sort:{avgno:-1}}
]);        

//if want to store data permanantly.
db.webrank.aggregate({
	$match:{category:"blogs"}},
{	$group:{_id:"category",totalBlogVisits:{$sum:"$visits"}}
},{$out:{totalBlogVisits}});           
 
