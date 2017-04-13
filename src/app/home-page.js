import React, {Component} from 'react'
import 'img/GUESTROOM_REV4.jpg'

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
                <div className="branding-container">
                    <div className="branding">
                        Vagary, Inc.
                    </div>
                    <div>
                        Interior Design
                    </div>
                </div>
            </div>
        </section>
    }
}