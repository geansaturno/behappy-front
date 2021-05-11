import React from 'react'
import Label from '../Label'
import Input from '../Input'
import GenderSelector from '../GenderSelector'
import User from '../../modules/User'
import Button from '../Button'
class NovoUsuario extends React.Component {
    constructor () {
        super()
        this.state = {
            user: new User(),
            validation: {
                invalidName: false,
                invalidGender: false
            }
        }
    }

    updateName ({ target }) {
        const user = this.state.user
        user.name = target.value

        this.setState({ user })
    }

    updateGender (e, gender) {
        e.preventDefault()

        const user = this.state.user
        user.gender = gender
        this.setState({ user })
    }

    validate (e) {
        e.preventDefault()
        const { user, validation } = this.state

        validation.invalidGender = !user.isGenderValid
        validation.invalidName = !user.isNameValid

        this.setState({ validation })
    }

    render () {
        return (
            <div className="center">
                <form action="" className="pure-form pure-form-stacked">
                    <Label
                        htmlFor="label"
                        text="Quem é você"
                        isInvalid={this.state.nomeInvalido}
                    />
                    <Input
                        id="nome"
                        placeholder="Digite seu nome"
                        maxLength="40"
                        readOnly={false}
                        isInvalid={this.state.validation.invalidName}
                        defaultValue={this.state.user.name}
                        onChange={this.updateName.bind(this)}
                    />
                    <GenderSelector
                        isValid={this.state.validation.invalidGender}
                        gender={this.state.user.gender}
                        updateGender={this.updateGender.bind(this)}
                    />
                    <Button
                        principal
                        text="Proximo"
                        onClick={this.validate.bind(this)}
                    />
                </form>
            </div>
        )
    }
}

export default NovoUsuario
