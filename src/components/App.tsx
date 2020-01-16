import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import styled from '@emotion/styled'
import Header from './Header'
import { SearchResults } from './SearchResults'
import { SearchBar } from './Searchbar'

const App: FC = () => {
  return (
    <Container>
      <Header />
      <SearchBar />
      <SearchResults />
      {/* Happy coding! */}
    </Container>
  )
}

const Container = styled.div({
  margin: '0 auto',
  height: '100%',
  width: '560px',
  paddingTop: '60px',
})

export default hot(App)
