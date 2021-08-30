// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//category has many product
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

//product belongs to category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

//product belongs to many tag
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

//tag belongs to many product
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
