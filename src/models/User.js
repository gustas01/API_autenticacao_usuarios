import Sequelize, {Model} from "sequelize";
import databaseConfig from "../config/database";

const connection = new Sequelize(databaseConfig)

export default connection.define('User', {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password_hash: {
    type: Sequelize.STRING,
    allowNull: false
  },
})






// export default class User extends Model {}

// User.init({
//   email: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   password_hash: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
// },{
//   connection,
//   modelName: 'User'
// })

