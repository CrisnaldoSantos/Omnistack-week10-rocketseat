const {Router} = require('express');
const routes = Router();
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

routes.get('/', (req,res)=>{
    return res.json({message:'ok'});
})

routes.get('/devs',DevController.index);
routes.post('/devs',DevController.store);

routes.get('/search',SearchController.index);

module.exports=routes;