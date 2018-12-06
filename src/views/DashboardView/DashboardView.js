import React from 'react'
import Button from './Button'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'
import PieChart from '../../components/PieChart'
import BarChart from './BarChart'
import Paper from 'material-ui/Paper'


const style = {
  paper: {
    margin: 12,
    padding: 12
  },
}

const API_URL = 'https://twoja-kaloria.firebaseio.com/products'

class Dashboard extends React.Component {
  state = {
    viewportWidth: window.innerWidth
  }

  componentDidMount() {
    window.addEventListener(
      'resize',
      this.resizeListener
    )
    this.loadData()

  }

  loadData = () => {
    fetch(`${API_URL}.json`)
      .then(response => response.json())
      .then(data => {
        const array = Object.values(data)
        const categoryList = array.map(element => element.category)
        const categoryObject = {}
        for (let i = 0; i < categoryList.length; i++) {
          if (categoryObject[categoryList[i]]) {
            categoryObject[categoryList[i]] = categoryObject[categoryList[i]] + 1
          } else {
            categoryObject[categoryList[i]] = 1
          }
        }
        const colors = ['red', 'blue', 'yellow', 'green', 'purple', 'pink', 'grey']
        const categoryArray = Object.entries(categoryObject)
        const pieChartData = categoryArray.map((entry, i) => ({
          value: entry[1],
          name: entry[0],
          fill: colors[i]
        }))
        this.setState({
          data: pieChartData
        })

      })
  }

  resizeListener = () => {
    this.setState({
      viewportWidth: window.innerWidth
    })
  }

  render() {
    return (
      <Paper
        style={style.paper} >
        <Grid>
          <Row middle="xs" center='xs'>
            <Col lg={4}>
              <Link to='/productlist'>
                <Button
                  label={'Go to list'}
                />
              </Link>
            </Col>
            <Col lg={4}>
              <Link to='/favouritelist'>
                <Button
                  label={'Go to favourites'}
                />
              </Link>
            </Col>
            <Col lg={4}>
              <Link to='/addproduct'>
                <Button
                  label={'Add new item'}
                />
              </Link>
            </Col>
          </Row>
          <Row
            center='xs'>
            <Col lg={6}>
              <h1>Liczba produktów w bazie</h1>
              <Row middle="xs" center='xs'>
                <PieChart
                  data={this.state.data}
                  viewportWidth={this.state.viewportWidth}
                />
              </Row>
            </Col>
            <Col lg={6}>
              <h1>Liczba użytkowników</h1>
              <Row middle="xs" center='xs'>
                <BarChart
                  viewportWidth={this.state.viewportWidth}
                />
              </Row>
            </Col>
          </Row>
        </Grid>
      </Paper>

    )
  }

  componentWillUnmount() {
    window.removeEventListener(
      'resize',
      this.resizeListener
    )
  }
}

export default Dashboard