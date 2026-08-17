module.exports = (req, res, next) => {
    console.log('second');
    // short circuit
    if (true) {
        next()
    } else {
        res.status(401).send('error')
    }
    console.log('second back');
}