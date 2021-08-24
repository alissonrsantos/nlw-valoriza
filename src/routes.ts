import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'
import { CreateComplimentController } from './controllers/createComplimentController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { ListUserReceiverComplimentsController } from './controllers/ListUserReceiverComplimentsController'
import { ListUserSenderComplimentsController } from './controllers/ListUserSenderComplimentsController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUsersController } from './controllers/ListUsersController'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController()
const listUserSenderComplimentsController = new ListUserSenderComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

router.post('/users', ensureAuthenticated, createUserController.handle)
router.post('/tags', ensureAdmin, createTagController.handle)
router.post('/login', authenticateUserController.handle)
router.post('/compliments', ensureAuthenticated, createComplimentController.handle)
router.get('/users/compliments/receive', ensureAuthenticated, listUserReceiverComplimentsController.handle)
router.get('/users/compliments/send', ensureAuthenticated, listUserSenderComplimentsController.handle)
router.get('/tags', ensureAdmin, listTagsController.handle)
router.get('/users', ensureAuthenticated, listUsersController.handle)

export { router }
