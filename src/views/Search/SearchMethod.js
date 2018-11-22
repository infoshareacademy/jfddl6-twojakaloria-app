import React from 'react'
import data from '../ProductList/Product'

const SearchMethod = (props) => (
    data
        .filter((product) => product.name.indexOf(props.name) !== -1)
        .map((el) => <div key={el.name}><h2>{el.name}</h2></div>)
)

export default SearchMethod