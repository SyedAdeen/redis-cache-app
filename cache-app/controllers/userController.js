
const { User } = require('../models');
const redisClient = require('../RedisClient');



const getdata = async (req,res)=>{
    try {
        const users = await User.findAll();
        // console.log("These are the users:",users);
        res.json(users);
        
    } catch (error) {
        res.status(500).json(
            {
                msg:"Error Occured",
                error: error.message
            }
        );
    }
}

const getage = async (req,res)=>{
    try {
        const users = await User.findAll({
            attributes:['name','age'],
        })

        res.json(users);
        
    } catch (error) {
        res.status(500).json(
            {
                msg:"Error Occured",
                error: error.message
            }
        );
        
    }
}


const getmaxAge = async (req, res) => {
    try {
        const maxAge = req.age;
        const cacheKey = req.cacheKey; 

        const users = await User.findAll({
            attributes: ['name', 'age'],
            where: {
                age: maxAge
            }
        });

        if (users.length > 0) {
            await redisClient.set(cacheKey, JSON.stringify(users), {
                EX: 20 //seconds
            });
            res.json(users);
        } else {
            res.status(404).json({ msg: "Not Found" });
        }
    } catch (error) {
        res.status(500).json({
            msg: "Error Occurred",
            error: error.message
        });
    }
};

module.exports = { getmaxAge, getdata, getage };







