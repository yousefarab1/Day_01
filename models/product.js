
const fs = require("fs/promises");
const path = require("path");

const dataPath = path.resolve(__dirname, "..", "data", "data.json");

module.exports = class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }


    static async getAllProducts() {
        const dataBuffer = await fs.readFile(dataPath);
        const data = JSON.parse(dataBuffer);

        return data.products;
    }


    static async getProductById(id) {
        const dataBuffer = await fs.readFile(dataPath);
        const data = JSON.parse(dataBuffer);

        const product = data.products.find(
            product => product.id === id
        );

        return product;
    }


    static async createProduct(product) {
        const dataBuffer = await fs.readFile(dataPath);
        const data = JSON.parse(dataBuffer);

        const lastProduct =
            data.products[data.products.length - 1];

        const nextId =
            lastProduct ? lastProduct.id + 1 : 1;

        product.id = nextId;

        data.products.push(product);

        await fs.writeFile(
            dataPath,
            JSON.stringify(data, null, 2)
        );

        return nextId;
    }


    static async updateProduct(id, name, price) {
        const dataBuffer = await fs.readFile(dataPath);
        const data = JSON.parse(dataBuffer);

        const product = data.products.find(
            product => product.id === id
        );

        if (!product) {
            return null;
        }

        product.name = name;
        product.price = price;

        await fs.writeFile(
            dataPath,
            JSON.stringify(data, null, 2)
        );

        return product;
    }


    static async deleteProduct(id) {
        const dataBuffer = await fs.readFile(dataPath);
        const data = JSON.parse(dataBuffer);

        const productIndex = data.products.findIndex(
            product => product.id === id
        );

        if (productIndex === -1) {
            return null;
        }

        const deletedProduct =
            data.products.splice(productIndex, 1)[0];

        await fs.writeFile(
            dataPath,
            JSON.stringify(data, null, 2)
        );

        return deletedProduct;
    }
};