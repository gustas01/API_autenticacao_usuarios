import User from '../models/User'

let homeController = {}

homeController.index = async (req, res) => {
  res.send("olá do controler do user no index")
}


homeController.create = async (req, res) => {
  const novoUser = await User.create({
    email: "gustas@email.com",
    password_hash: 'guxtax'
  })
  res.json(novoUser)
}


homeController.read = async (req, res) => {
  res.send("olá do controle no read")
}


homeController.update = async (req, res) => {
  res.send("olá do controle no update")
}


homeController.delete = async (req, res) => {
  res.send("olá do controle no delete")
}



export default homeController
