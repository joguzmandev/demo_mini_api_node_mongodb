const {user} = require('../models')

const getItems = async (req, res) => {
    const data = await user.find({})
    res.json({
        code: 200,
        ok: true,
        data: data
    })
};

const getItem = (req, res) => {
    res.json({id:req.params.id})
};


const createItem = async (req, res) => {
    const { body } = req;
    const rs = await user.create(body)
    console.log(body);
    res.json({response:rs})
};
const updatetItem = (req, res) => { };
const deleteItem = (req, res) => { };


module.exports = {
    getItems, getItem, createItem, updatetItem, deleteItem
}
