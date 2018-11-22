import React from 'react'
import data from '../ProductList/Product'

const FavoriteList = () => (
    data
        .filter((product) => product.favorites)
        .map((el) => <div key={el.name}><h2>{el.name}</h2></div>)
)

export default FavoriteList