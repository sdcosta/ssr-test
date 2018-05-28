import React from "react"

import LayoutContainer from './Layout.styles'

export default class Layout extends React.Component {
    constructor() {
        super()
        debugger
        this.state = {
            title: "Welcome to React SSR!",
        }
    }

    render() {
        return (
            <LayoutContainer>
                <h1>{this.state.title}</h1>
            </LayoutContainer>
        )
    }
}
