import React, {Component, render} from 'react'
import 'img/GUESTROOM_REV4.jpg';

export default class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            title: 'Home',
            isActive: false
        }
    }
    
    render() {
        return <section className="page home-page">
            <div className="page__content home-page__content">
                Home
            </div>
        </section>
    }
}   