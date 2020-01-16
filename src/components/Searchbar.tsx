import React, { useState, FC } from 'react'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { RootDispatcher } from '../redux/actions'
import { icons } from '../assets'

export const SearchBar: FC = () => {
  const dispatch = useDispatch()
  const rootDispatcher = new RootDispatcher(dispatch)

  const [searchText, setSearchText] = useState('')

  const handleChange = event => {
    setSearchText(event.target.value)
  }

  const search = (e, str: string) => {
    e.preventDefault()
    rootDispatcher.searchBreed(str)
    setSearchText('')
  }
  return (
    <SearchContainer onSubmit={e => search(e, searchText)}>
      <SearchBarInput
        placeholder="Search for dog breeds here..."
        value={searchText}
        onChange={handleChange}
        name="text"
      />
      <SearchBarButton onClick={e => search(e, searchText)}>
        <SearchIcon src={icons['searchIcon']} />
        <SearchSpan>Search</SearchSpan>
      </SearchBarButton>
    </SearchContainer>
  )
}

const SearchContainer = styled.form({
  height: '5%',
  margin: 'auto',
})

const SearchBarInput = styled.input({
  width: '80%',
  height: '75%',
  border: 'none',
  background: '#F7F7F7',
})

const SearchBarButton = styled.button({
  backgroundColor: '#0794E3',
  border: 'none',
  height: '75%',
  width: '20%',
  borderRadius: '5px',
})

const SearchIcon = styled.img({
  width: '17px',
  height: '15px',
  align: 'center',
})

const SearchSpan = styled.span({
  color: 'white',
  marginLeft: '5%',
})
