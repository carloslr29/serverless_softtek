const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

async function obtenerRegistro(tableName, id){
    const result = await dynamodb
      .get({
        TableName: tableName,
        Key: { id },
      })
      .promise();

    return result
}

async function obtener(tableName){
  const result = await dynamodb
    .scan({
      TableName: tableName
    })
    .promise();

  return result
}

async function insertar(body, tableName){
    await dynamodb
    .put({
        TableName: tableName,
        Item: body,
    })
    .promise();
}

module.exports = {
    obtenerRegistro, 
    obtener, 
    insertar
  }