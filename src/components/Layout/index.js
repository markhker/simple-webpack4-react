import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Container, Divider, Icon } from 'semantic-ui-react'

import { pullRight, h1 } from './styles.css'

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to='/'>
        <Header as='h1' className={h1}>
          React
        </Header>
      </Link>
      {children}
      <Divider />
      <p className={pullRight}>
        Made with <Icon name='heart' color='red' /> by Mark Hkr
      </p>
    </Container>
  )
}

export default Layout
