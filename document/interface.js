用户相关： http://47.95.229.11:8181/

用户登录
POST
/users/login

{
	userName:shixx@vipsdb.com,
	passWord:123456,
	systemId:1
}

{
	token:eja8pkuuvus372m0uotij9usroqnud7g,
	role:SuperAdministrator,
	id:59fff62d4540bf30d822c7d2
}


添加用户
POST
/users/addUser


{
	token:eja8pkuuvus372m0uotij9usroqnud7g,
	userName:testaaaaa,
	passWord:123456
}

{
  "id": "5a041ab9aca82f7ac1b49c5f",
  "userName": "testaaaaa",
  "role": "lion",
  "createTime": "2017-11-09 17:07:05"
}


删除用户
DELETE
/users/deleteUser

{
	token:eja8pkuuvus372m0uotij9usroqnud7g,
	userName:testaaaaa
}

Delete user success!

{"errCode":500,"errMsg":"请求处理异常: token is wrong!"}


用户退出登录
DELETE
/users/exit

{
	token:eja8pkuuvus372m0uotij9usroqnud7g,
	userName:shixx@vipsdb.com,
	systemId:1
}
{
	no content
}
