//remove a field
db.medicines.updateOne({mid:"101gm"},{$unset:{name:1}});

//remove a document
db.medicines.deleteOne({mid:"101gm"});

//removing a collection
db.medicines.drop();

//delete current database
db.dropDatabase();
