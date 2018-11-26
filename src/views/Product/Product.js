import React from 'react'
import Paper from 'material-ui/Paper'
import Button from '../DashboardView/Button'
import { database } from '../../firebase'



class Product extends React.Component {


    componentDidMount() {
        let key = this.props.match.params.key;
        database.ref(`/products/${key}`)
            .on('value', (snapshot) => {
                this.setState({
                    data: snapshot.val()
                })
                console.log(snapshot.val())
            });
    }


    render() {
        return (
            <div>
                <Paper>

                    <h1>{this.props.match.params.key}</h1>
                    <h1>{this.state.data.carbohydrates}</h1>


                </Paper>
                <Paper>
                    <Button
                        label={'Back to list'}
                    />
                    <Button
                        label={'Add to favourite'}
                    />

                </Paper>
            </div>
        )
    }
}
export default Product