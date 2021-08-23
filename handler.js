// 'use strict';
const serverless = require('serverless-http');
// const express = require('express');
// const app = express();
const Server = require('./Server/server');

const server = new Server();

const app = server.listen();
// const AWS = require('aws-sdk');
// const documentClient = new AWS.DynamoDB.DocumentClient({ region: 'us-west-1' });
// const TableName = 'prueba_producto';

// app.get('/product', function (req, res) {
//   res.send('Hello World!')
// })


// const CreateEntity = async (_params) => {
//   try {
//     await documentClient.put(_params).promise();
//   } catch (error) {
//     return error;
//   }
// }
// const listEntity = async (_params) => {
//   let scanResults = [];
//   let items;
//   do {
//     items = await documentClient.scan(_params).promise();
//     items.Items.forEach((item) => scanResults.push(item));
//     _params.ExclusiveStartKey = items.LastEvaluatedKey;
//   } while (typeof items.LastEvaluatedKey !== "undefined");

//   return scanResults;
// }

// module.exports.CreateProduct = async (event) => {
//   try {
//     const body = event.body;
//     const Item = JSON.parse(body);
//     const params = { Item, TableName };
//     const create = await CreateEntity(params);
//     const result = {
//       statusCode: 200,
//       body: JSON.stringify('entity create')
//     };
//     return result;
//   } catch (error) {
//     console.log(error);
//     return {
//       statusCode: 400,
//       body: JSON.stringify(error),
//     };
//   }
// };

// const ListProduct = async (event) => {
//   try {
//     // const body = event.body;
//     // const Item = JSON.parse(body);
//     const params = {
//       TableName,
//     };
//     const list = await listEntity(params);
//     const result = {
//       statusCode: 200,
//       body: JSON.stringify(list)
//     };
//     return result;
//   } catch (error) {
//     console.log(error);
//     return {
//       statusCode: 400,
//       body: JSON.stringify(error),
//     };
//   }
// };
module.exports.handler = serverless(app);

