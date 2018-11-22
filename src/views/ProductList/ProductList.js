import React from 'react'
import data from './Product.json'
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';



const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },
}
class ProductList extends React.Component {
    state = {
        checked: false,
    }
    render() {
        return (
            <div>
                {data.map((product) =>
                    <div key={product.name}>
                        <h2>
                            {product.name}
                        </h2>
                        <Checkbox
                            checkedIcon={<ActionFavorite />}
                            uncheckedIcon={<ActionFavoriteBorder />}
                            label="Custom icon"
                            style={styles.checkbox}
                        />
                    </div>)}
            </div>
        )
    }
}
export default ProductList