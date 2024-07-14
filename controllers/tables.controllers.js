import TableA from '../models/TableA.js';
import TableB from '../models/TableB.js';
import TableC from '../models/TableC.js';
import { v4 as uuidv4 } from 'uuid';

export const createTable = async (req, res) => {
  const { Tabla } = req.body;

  try {
    let newRecord;
    let tableName;

    if(!Tabla) {
      return res.status(400).json({ error: "Parámetro 'Tabla' es obligatorio" })
    }

    switch (Tabla) {
      case 'A':
        tableName = TableA;
        break;
      case 'B':
        tableName = TableB;
        break;
      case 'C':
        tableName = TableC;
        break;
      default:
        return res.status(400).json({ error: "Valor del parámetro 'Tabla' no es válido" });
    }

    const UUID = uuidv4();

    newRecord = await tableName.create({ UUID });

    res.json(newRecord);
  } catch (error) {
    console.error('Error creating record:', error);
    res.status(500).json({ message: 'Error creating record' });
  }
};
