module.exports = (req, res, next) => {
    console.log(`current request :${req.method} ${req.url}`);
    next()
    console.log(`response status :${req.statusCode} `);
}
