module.exports = function(app) {
    var productsController = require('../controllers/productsController');

    app.route('/products')
        .get(productsController.getAll);

    app.route('/products/:id')
        .get(productsController.getById)
        .put(productsController.updateById);
};
