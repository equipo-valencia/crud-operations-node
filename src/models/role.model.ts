import { Model, Sequelize, DataTypes } from 'sequelize';
import { database } from '../database';
 

export class Role extends Model {
    public id!: number;
    public role!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Role.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt :{
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
},{
    tableName: 'role',
    sequelize: database // Es donde decimos como conectanros a la base de datos
})

 
