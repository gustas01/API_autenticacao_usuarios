import User from '../models/User'

let userController = {}

userController.index = async (req, res) => {
 try{
  const users = await User.findAll()
  res.json(users)
 }catch(e){
  res.status(400).json({
    errors: e.errors.map(err => err.message)
  })
 }
}


userController.create = async (req, res) => {
  try{
    const novoUser = await User.create(req.body)
    const {email, password} = novoUser
    return res.json({email, password})
  }catch(e){
    res.status(400).json({
      errors: e.errors.map(err => err.message)
    })
  }
}


userController.read = async (req, res) => {
  try{
    if(!req.params.id){
      return res.status(400).json({errors: ["ID não enviado"]})
    }

    const user = await User.findByPk(req.params.id)

    if(!user){
      return res.status(404).json({errors: ["Usuário não existe"]})
    }

    return res.status(200).json({id: user.id, email: user.email})
  }catch(e){
    return res.status(400).json({
      errors: e.errors.map(err => err.message)
    })
  }
}


userController.update = async (req, res) => {
  try{
    console.log(req.params.id)
    if(!req.params.id){
      return res.status(404).json({errors: ["ID não enviado"]})
    }

    const user = await User.findByPk(req.params.id)

    if(!user){
      return res.status(404).json({errros: ["Usuário não encontrado"]})
    }

    const userUpdated = await user.update(req.body)
    return res.status(200).json(userUpdated)

  }catch(e){
    return res.status(400).json({
      errors: e.errors.map(err => err.message)
    })
  }
}


userController.delete = async (req, res) => {
  try{
    if(!req.params.id){
      return res.status(400).json({errors: ["ID não enviado"]})
    }

    const user = await User.findByPk(req.params.id)

    if(!user){
      return res.status(404).json({errors: ["Usurário não encontrado"]})
    }

    //1ª forma de fazer
    User.destroy({
      where: {
        id: req.params.id
    }})

    //2ª forma de fazer
    // await user.destroy()

    return res.status(200).json(user)
  }catch(e){
    console.log(e)
    return res.status(200).json({
      errors: e.errors.map(err => err.message)
    })
  }
}



export default userController
