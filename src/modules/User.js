class User {
    constructor () {
        this.name = ''
        this.gender = ''
    }

    get isNameValid () {
        if (
            typeof this.name === 'string' &&
            this.name.length !== 0 &&
            this.name.length <= 40) {
            return true
        }
        return false
    }

    get isGenderValid () {
        return ['m', 'f'].includes(this.gender)
    }
}

export default User
