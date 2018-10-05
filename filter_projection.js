//filter and prejection,first in find is filter and second is prejction.
//db.item.find({},{}).pretty();

//first take cake filter then it will show only preice of cake.
db.item.find({"name":"cake"},{"price":true}).pretty();


//now it will give the price of all items.
db.item.find({},{"price":true}).pretty();

//it will show all name and price.
db.item.find({},{"_id":0,"name":true,"price":true}).pretty();

//now when both will b there in db then it will show.
db.item.find({"name":"bread","price":100}).pretty();

//accessing by objects in array.
db.item.find({"ingredients.type":"base-ing"});


//fechting nested documents.now it will search in both base and adv ing.
db.item.find({"ingredients.values.1":"Honey"},{"_id":0,"name":true,"ingredients":true}).pretty();


//now it will first search in 1 at 1.then 1 at 0.
db.item.find({"ingredients.1.values.1":"Honey","ingredients.0.values.1":"Baking soda"},{"_id":0,"name":true,"ingredients":true}).pretty().count();