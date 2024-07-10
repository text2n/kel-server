import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class AuthController {
    async loginPage( { inertia }: HttpContext) {
        return inertia.render('auth/login')
    }

    async login({request, auth, response} : HttpContext) {
        const { email, password } = request.only(['email', 'password'])

        //Step 2: Verify credentials
        const user = await User.verifyCredentials(email, password)

        //Step 3: Login user
        await auth.use('web').login(user)

        return response.redirect().toRoute('dashboard.index')
    }
}