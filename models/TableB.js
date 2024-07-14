import { DataTypes } from 'sequelize';
import db from '../database/database.js'

const TableA = db.define('TableB', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  UUID: {
    type: DataTypes.UUID,
    allowNull: false
  },
  inserted_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'TableB',
  timestamps: false
});

export default TableA;
