db.orders.insertMany([
{cust_id:"A123",amount:500,status:"A"},
{cust_id:"A123",amount:200,status:"A"},
{cust_id:"B123",amount:500,status:"A"},
{cust_id:"B212",amount:200,status:"A"},
{cust_id:"A123",amount:400,status:"D"},
{cust_id:"A123",amount:300,status:"D"},
]);

//status A ,group by amount.
db.orders.mapReduce(
	function(){
	emit(this.cust_id,this.amount);
},
	function(key,values){
	return Array.sum(values);
},
	{query:{status:"A"},out:"totalamount"}
);