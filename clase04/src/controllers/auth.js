import bcrypt from 'bcrypt'

const saltRounds = 10;
import { User } from "../models/User.js"
const authController = {
    registerForm(req, res) {
        res.render('register')
    },
    async registerUser(req, res) {
        console.log(req.body)
        const { firstName, lastName, email } = req.body
        const password = await bcrypt.hash(req.body.password, saltRounds)

        const data = {
            firstName, lastName, email, password
        }

        const newUser = new User(data)
        try {
            const response = await newUser.save()
            console.log('response from database')
            console.log(response)
            // res.redirect('/')
        } catch (error) {
            console.log("EN EL CATCH")
            // console.error(error.message)
        }


    }
}

export default authController