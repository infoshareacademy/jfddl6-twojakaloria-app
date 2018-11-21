import React from 'react'
import data from './Product.json'

class ProductList extends React.Component {
    componentDidMount() {
        console.log(data)
      }
    render() {
        return (
            <div>
                {data.map((product)=><div>{product.name}</div>)}
            </div>
        )
    }
}
export default ProductList