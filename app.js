const express = require('express')

const morgan = require('morgan')

// import meddlewares
const customLogin = require('./middlewares/custom-login-mw')
const short = require('./middlewares/short-circuit-mw')



// import router
const appRouter = require('./routers/appRouter')
const userRouter = require('./routers/userRouter')
const productRouter = require('./routers/productRouter')


const app = express()

// pipeline

// middlewares (functions)
// req, res next
// app.use(customLogin)
app.use(morgan('dev'))
app.use(express.json()) //req.dev
app.use(short)

// app.use((req, res, next) => {
//     console.log('third');
// })



// routing

app.use("/api/v1", appRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/products", productRouter)

module.exports = app