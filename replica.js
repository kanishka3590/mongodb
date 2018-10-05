//to see current running process
ps -aux | grep mongod

//creating replica
mongod --replSet kani --logpath "rs4.log" --dbpath rs4 --port 27020

//config object,mapping replica
config={
	_id:"kani",members:[
	{_id:0,host:'localhost:27018'},
	{_id:1,host:'localhost:27019'},	
	{_id:2,host:'localhost:27020'}]
}
//initializing replica
rs.initiate(config);

//to check status of replica
rs.status()


mongo --host 127.0.0.1 --port 27018 