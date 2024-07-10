/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import AuthController from '#controllers/auth_controller'
import DashboardController from '#controllers/dashboard_controller'

router.group(() => {
    router.get('login', [AuthController, 'loginPage']).as('auth.loginPage')
    router.post('auth/login', [AuthController, 'login'])
}).use(middleware.guest())

//Authenticated routes
router.group(() => {
    router.get('dashboard', [DashboardController, 'index']).as('dashboard.index')
    router.get('logout', async ({ auth, response }) => {
        await auth.use('web').logout()
        return response.redirect('/login')
    })
    router.on('/').renderInertia('home', { version: 6 })
}).use(middleware.auth())
