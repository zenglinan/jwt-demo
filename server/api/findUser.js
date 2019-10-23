function findUser(username, userList){  // 给定用户列表和要查询的用户名，返回用户所在的条目
  for(let i = 0, len = userList.length; i < len; i ++){
    const user = userList[i]
    if(username === user.username){
      return user
    }
  }
  return null // 查无则返回 null
}

module.exports = findUser