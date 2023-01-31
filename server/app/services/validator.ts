import { getUserByEmail, getUserByUserName } from "~/server/database/repositories/userRepository"
import { RegistrationRequest } from "~/types/IRegistration"


export async function validate(data: RegistrationRequest) {

    const errors = new Map<string, { message: string | undefined }>()

    for (const [key, value] of Object.entries(data)) {
        let val = await validateRegistration(key, value)

        if (val.hasError) {
            errors.set(key, { 'message': val.errorMessage })
        }
    }

    return errors
}

async function validateRegistration(key: string, value: string): Promise<InputValidation> {
    const check: InputValidation = {
        value,
        isBlank: false,
        lenghtMin8: true,
        key,
        hasError: false
    }
    if (key == 'name') {
        if (value.length < 1) {
            check.hasError = true
            check.errorMessage = `Name is not`
        }
      
    }

    if (key == 'password') {
        if (value.length < 8) {
            check.hasError = true
            check.errorMessage = `password must be at least 8 characters`
        }
        check.lenghtMin8 = false
    }

    if (key == 'email') {
        const email = await getUserByEmail(value)
        if (email) {
            check.emailTaken = true
            check.hasError = true
            check.errorMessage = `Email is invalid or already taken`
        }
        const regexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

        if (value.search(regexp)== -1){
            check.hasError = true
            check.errorMessage = `Email not a correct entry` 
        }
    }

    if (key == 'username') {
        const username = await getUserByUserName(value)
        if (username) {
            check.usernameTaken = true
            check.hasError = true
            check.errorMessage = `Username is invalid or already taken`
        }
        if (value.length < 1) {
            check.hasError = true
            check.errorMessage = `UserName is not`
        }
    }

    return check
}
