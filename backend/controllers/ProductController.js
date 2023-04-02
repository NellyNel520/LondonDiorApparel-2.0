const { Category, Product } = require('../models')


// Create Products & Product Categories
const createProductCategory = async (req, res) => {
	try {
		const category = await new Category(req.body);
		await category.save();
		return res.status(201).json({
			category,
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

const createProduct = async (req, res) => {
	try {
		console.log(req.body)
		const product = await new Product(req.body);
		await product.save();
		if (req.body.categoryId) {
			const categoryId = await Category.findById(req.body.categoryId)
			categoryId.products.push(product._id);
			await categoryId.save();
		}

		return res.status(201).json({
			product,
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};