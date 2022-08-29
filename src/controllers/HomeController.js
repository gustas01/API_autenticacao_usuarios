function index(req, res){
  res.status(200).json({tudCerto: true})
}


function create(req, res){
  res.send("olá do controle no create")
}


function read(req, res){
  res.send("olá do controle no read")
}


function update(req, res){
  res.send("olá do controle no update")
}


function deleteUser(req, res){
  res.send("olá do controle no deleteUser")
}





export default {index, create, read, update, deleteUser}
