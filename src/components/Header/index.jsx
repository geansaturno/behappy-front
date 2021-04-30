import React from 'react'
import './img/logo.png'
import './style.scss'

export default function Header() {
    return (
        <div className="header pure-menu pure-menu-horizontal pure-menu-fixed">
            <a href="/">
                <img src="img/logo.png" alt="Nuvem escrito BeHappyWithMe" className="logo"/>
            </a>

            <h4 className="label">Agenda de gentileza</h4>
        </div>
    )
}