// ------------------USER SIGNUP API-----------------------

const user = require('../models/user');
console.log("controller");
const createUserAcount = async (req, res) => {
    // const { name, phone, address } = req.body;
    const name = "xyz";
    const phone = "0987654321";
    const address = "123";
    console.log("controller inner");
    await new user({ name, phone, address }).save().
        then(() => res.status(200).send({ "Massage": "success" })).
        catch((err) => res.status(404).send(err))
};

module.exports = { createUserAcount }