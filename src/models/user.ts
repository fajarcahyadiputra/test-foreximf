import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config/db'

interface UsersAttributes {
  id: number;
  name: string;
  level: number;
  parent_id: string;
  bonus: number;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface UserInput extends Optional<UsersAttributes, 'id'> {}
export interface UsertOuput extends Required<UsersAttributes> {}

class User extends Model<UsersAttributes, UserInput> implements UsersAttributes {
    public id!: number
    public name!: string
    public level!: number;
    public parent_id!: string;
    public bonus!: number;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }
  
  User.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    level: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
    parent_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    bonus: {
        type: DataTypes.NUMBER,
        allowNull: true,
    },
  }, {
    timestamps: true,
    sequelize: sequelizeConnection
  })

//   User.belongsToMany(User, { as: 'groups', through: 'product_categories' });
  
  export  {User}