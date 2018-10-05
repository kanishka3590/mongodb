db.createUser({
	user : "filmer",
	pwd : "filmer",
	roles : [{db:"heros",role:"read"},"readWrite","dbAdmin"]
});


db.createUser({
	user : "filmer",
	pwd : "filmer",
	roles : ["read"]
});


to give extra information of that user.
db.createUser({
	user : "appuser",
	pwd : "appuser",
	roles : ["dbOwner",{db:"local",role:"read"}],
	customData : {
			"employeeId" : 12345,
			"employeeName" :"john"
		}
},{w:"majority"});



db.changeUserPassword("rootUser","password");
now again try to login.

granting roles:
db.grantRolesToUser("rootUser",[{db:"local",role:"read"}]);

remove roles:
db.revokeRolesFromUser("rootUser",[{db:"local",role:"read"},"dbOwner"]);

to delete user:
db.dropUser("appuser");
or
db.removeUser(username);(old method)

db.dropUsers();
will delete all user.


