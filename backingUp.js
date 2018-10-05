//all operation come in BSON from
//export database
mongodump -u rootUser -p password --authenticationDatabase admin --db bes8-bakery
//or
mongodump --username rootUser --password password --authenticationDatabase admin --db bes8-bakery


//if unauthorize database
mongodump --db bes8-bakery

//want to compress
mongodump -u rootUser -p password --authenticationDatabase admin --db bes8-bakery --gzip

//export perticular collection
mongodump -u rootUser -p password --authenticationDatabase admin --db bes8-bakery --collection item

//restore database
mongorestore -u rootUser -p password --authenticationDatabase admin --db bes8bk --collection cl.bes8bk dump/bes8-bakery/item.bson



//All operation now will come in JSON form
//export database
mongoexport -u rootUser -p password --authenticationDatabase admin --db bes8bk --collection cl.bes8bk

//redirect this data inside a directory but it will give raw json file.not give in array
mongoexport -u rootUser -p password --authenticationDatabase admin --db bes8bk --collection cl.bes8bk --out mean/backup/item.json

//now it will give in form of array
mongoexport -u rootUser -p password --authenticationDatabase admin --db bes8bk --collection cl.bes8bk --jsonArray --out mean/backup/item.json

//import
mongoimport -u rootUser -p password --authenticationDatabase admin --db bes8bk --collection newItem --jsonArray mean/backup/item.json




