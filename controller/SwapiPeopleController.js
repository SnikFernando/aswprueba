const swapi = require('swapi-node');
const Response = require("../Helper/Response");

const GetPeople = async (req, res = response, next) => {
    try {
        const id = req.params.id;
        const people = await swapi.getPerson(id);
        return res.status(200).json(Response(200, "ok", people));
    } catch (error) {

    }
}



module.exports = {GetPeople}