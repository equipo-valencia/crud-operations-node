import { Model, Sequelize, DataTypes } from 'sequelize';
import { database } from '../database';
import { Book } from './book.model';
import { User } from './user.model';

export class Sales extends Model {
    public id!: number;
    public userId!: number;
    public booksId!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Sales.init({ 
id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
},
UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: User,
        key: 'id',
      },
      onUpdate: 'SET NULL',
      onDelete: 'SET NULL',
},
BookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Book,
        key: 'id',
      },
      onUpdate: 'SET NULL',
      onDelete: 'SET NULL',
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
tableName: 'sales',
sequelize: database // Es donde decimos como conectanros a la base de datos

})

Sales.belongsTo(User);
Sales.belongsTo(Book);

 