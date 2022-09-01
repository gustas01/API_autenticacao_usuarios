import User from '../models/User'

let userController = {}

userController.index = async (req, res) => {
  res.send("olá do controler do user no indexxx")
}


userController.create = async (req, res) => {
  try{
    const novoUser = await User.create(req.body)
    const {email, password} = novoUser
    res.json({email, password})
  }catch(e){
    res.status(400).json({
      errors: e.errors.map(err => err.message)
    })
  }
}


userController.read = async (req, res) => {
  res.send("olá do controle no read")
}


userController.update = async (req, res) => {
  res.send("olá do controle no update")
}


userController.delete = async (req, res) => {
  res.send("olá do controle no delete")
}



export default userController
