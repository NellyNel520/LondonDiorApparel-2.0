const { Category, Product } = require('../models')

// Create  Categories
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

// Get ALL  Categories

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json({ categories });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
// Get Category By ID or Find by category

const getCategoryById = async (req, res) => {
	try {
		const { id } = req.params;
		const category = await Category.findById(id);
		if (category) {
			return res.status(200).json({ category });
		}
		return res.status(404).send('Category with the specified ID does not exists');
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

module.exports ={
  createProductCategory,
  getAllCategories,
  getCategoryById,

}