import React, {Component, render} from 'react'

export default class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            title: 'Home'
        }
    }
    
    render() {
        return <section className="page home-page">
            Home
        </section>
    }
}