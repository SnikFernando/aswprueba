const BaseService = require('../services/BaseService');
const Response = require("../Helper/Response");
const Generate = require('../Helper/Generate')
const service = new BaseService();
const generate = new Generate();
const TableName = 'prueba_producto';

const ListProduct = async (req, res = response, next) => {
    try {
        const params = {
            TableName,
        };
        const list = await service.listEntity(params);
        return res.status(200).json(Response(200, "ok", list));
    } catch (error) {

    }
}

const CreateProduct = async (req, res = response, next) => {
  try {
    const body = req.body;
    const id = generate.Generatekey();
    const Item = {id,...body};
    const params = { Item, TableName };
    const create = await service.CreateEntity(params);
    return res.status(200).json(Response(200, "ok", create));
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
};

module.exports = { ListProduct, CreateProduct}