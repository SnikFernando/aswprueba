const express = require('express');
class Server{
    constructor() {
      this.app = express();   
      this.ProductPatch = '/api/product';
      this.SwapiPatch = '/api/swapi/people';
      //middleware
      this.middleware();
      //routes aplications
      this.routes();
    }
    middleware() {
      //Learning parse body
      this.app.use(express.json());
      //directory public
      this.app.use(express.static('public'));
    }
    routes() {
      const Router = require('../Routes/router');
      const SwapiPeopleRouter = require('../Routes/SwapiPeople.Routes');  
      this.app.use(this.ProductPatch, Router); 
      this.app.use(this.SwapiPatch,SwapiPeopleRouter);
    }
    listen() {
      return this.app;
    }
}
module.exports = Server;