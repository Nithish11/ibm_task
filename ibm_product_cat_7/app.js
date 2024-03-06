angular.module('productCatalogApp', [])
    .controller('ProductCatalogController', function () {
        var catalogCtrl = this;

        catalogCtrl.products = [
            { name: 'Product 1', category: 'Electronics', feature: 'Wireless' },
            { name: 'Product 2', category: 'Clothing', feature: 'Waterproof' },
            { name: 'Product 3', category: 'Electronics', feature: 'Bluetooth' },
            { name: 'Product 4', category: 'Home', feature: 'Energy Efficient' },
        ];

        catalogCtrl.categories = [...new Set(catalogCtrl.products.map(product => product.category))];
        catalogCtrl.features = [...new Set(catalogCtrl.products.map(product => product.feature))];

        catalogCtrl.filterProducts = function (product) {
            return (catalogCtrl.selectedCategory === '' || product.category === catalogCtrl.selectedCategory) &&
                   (catalogCtrl.selectedFeature === '' || product.feature === catalogCtrl.selectedFeature);
        };
    });
