import React from 'react'
import Label from '../Label'
import Input from '../Input'
import GenderSelector from '../GenderSelector'
class NovoUsuario extends React.Component {
    constructor () {
        super()
        this.state = {
            user: {
                name: '',
                gender: ''
            },
            validation: {
                invalidName: true,
                invalidGender: true
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
                </form>
            </div>
        )
    }
}

export default NovoUsuario
