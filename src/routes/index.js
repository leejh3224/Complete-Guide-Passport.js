import userRouter from './user'
import { Router } from 'express'

const routes = Router()

const isAuthenticated = (req, res, next) => {
  if (req.user) {
    return next()
  }
  res.redirect('/user')
}

routes.get('/dashboard', isAuthenticated, (req, res) => {
  res.render('dashboard')
})

routes.use('/user', userRouter)

export default routes
