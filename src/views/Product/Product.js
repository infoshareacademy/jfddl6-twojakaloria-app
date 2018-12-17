import React from 'react'
import Paper from 'material-ui/Paper'
import Button from '../DashboardView/Button'
import { database } from '../../firebase'
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'
import PieChart from '../../components/PieChart'

const style = {
    paper: {
        margin: 12,
        padding: 12
    },
    button: {
        marginTop: 12,
    },
    buttonContainer: {
        maxWidth: "800px",
        margin: "0 auto"
    }
}

class Product extends React.Component {
    state = {
        data: null,
        viewportWidth: window.innerWidth
    }

    componentDidMount() {
        const key = this.props.match.params.key;
        database.ref(`/products/${key}`)
            .on('value', (snapshot) => {
                this.setState({
                    data: snapshot.val()
                })
            });
        window.addEventListener(
            'resize',
            this.resizeListener
        )
    }

    resizeListener = () => {
        this.setState({
            viewportWidth: window.innerWidth
        })
    }

    toggleFavorite = () => {
        if (!this.state.data) return

        database.ref(`/products/${this.props.match.params.key}`).update({
            isFavorite: !this.state.data.isFavorite
        })
    }

    render() {
        return (
            <Paper
                style={style.paper}>

                <Grid>
                    <Row middle="xs" center='xs'>
                        <Col lg={6}>
                            {/* <h1>{this.props.match.params.key}</h1> */}
                            <h1>Category: {this.state.data && this.state.data.category}</h1>
                            <h2>Name: {this.state.data && this.state.data.name}</h2>
                            <h3>Kcal: {this.state.data && this.state.data.kcal}</h3>
                            <h3>Fat: {this.state.data && this.state.data.fat} g</h3>
                            <h3>Carbo: {this.state.data && this.state.data.carbohydrates} g</h3>
                            <h3>Protein: {this.state.data && this.state.data.protein} g</h3>

                        </Col>
                        <Col lg={6}>
                            <img
                                alt='product'
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',


                                }}
                                src={this.state.data && this.state.data.url}
                            />

                        </Col>
                    </Row>

                    <Row middle="xs" center='xs'>
                        <Col lg={12}>
                            <Row middle="xs" center='xs'>
                                <PieChart
                                    viewportWidth={this.state.viewportWidth}

                                    data={[{
                                        value: this.state.data && Number(this.state.data.carbohydrates),
                                        name: "Carbo",
                                        fill: "red"
                                    },
                                    {
                                        value: this.state.data && Number(this.state.data.protein),
                                        name: "Protein",
                                        fill: "purple"

                                    },
                                    {
                                        value: this.state.data && Number(this.state.data.fat),
                                        name: "Fat",
                                        fill: "yellow"

                                    },]}

                                />
                            </Row>
                        </Col>
                    </Row>
                </Grid>

                <div
                    style={style.buttonContainer}>
                    <Button
                        style={style.button}
                        fullWidth
                        onClick={this.toggleFavorite}
                        label={
                            this.state.data ?
                                this.state.data.isFavorite ?
                                    'remove from favourite'
                                    :
                                    'add to favourite'
                                :
                                'loading'
                        }
                    />
                </div>
                <Link to='/productlist'>
                    <div
                        style={style.buttonContainer}>
                        <Button
                            style={style.button}

                            label={'back to list'}
                            fullWidth
                        />
                    </div>
                </Link>

            </Paper>

        )
    }
}
export default Product