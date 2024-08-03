const redisClient = require('../RedisClient');

const maxAgeUser = async (req, res, next) => {
    const maxAge = req.query.maxAge;
    const cacheKey = `users:maxAge:${maxAge}`;

    try {
        const cachedUsers = await redisClient.get(cacheKey);

        if (cachedUsers) {
            return res.json(JSON.parse(cachedUsers));
        } else {
            req.cacheKey = cacheKey;
            req.age=maxAge;
            
            next();
        }
    } catch (error) {
        console.error('Redis error', error);
        req.cacheKey = cacheKey;
        req.age=maxAge;
        next();
    }
};

module.exports = maxAgeUser;
