const db = require('../database/db');

async function obtenerRegistro(tableName, id){
  const result = await db.obtenerRegistro(tableName, id)
  return result
}

async function obtener(tableName){
  const result = await db.obtener(tableName)
  return result
}

async function insertar(body, tableName){
  const result = await db.insertar(body, tableName)
  return result
}

module.exports = {
  obtenerRegistro, 
  obtener, 
  insertar
}