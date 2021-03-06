import React, { Component } from 'react'
import Header from '../components/Header'
import Meta from '../components/Meta'
import styled from 'styled-components'

const MyButton = styled.button`
    background: red;
    font-size: 50px;
`

class Page extends Component {
  render() {
    return (
        <div>
            <Meta />
            <Header />
            <MyButton>
            Click me
              <span>+poop</span>
            </MyButton>
            {this.props.children}
        </div>
    )
  }
}

export default Page