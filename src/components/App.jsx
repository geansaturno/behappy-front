import React from 'react'
import Header from './Header'
import NovoUsuario from './NovoUsuario'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <NovoUsuario/>
                <h1> Bem vindo ao react</h1>
            </div>
        )
    }
}