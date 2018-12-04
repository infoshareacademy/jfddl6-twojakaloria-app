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


const data = [
  {
    value: 15,
    name: "Warzywa",
    fill: "red"
  },
  {
    value: 10,
    name: "Owoce",
    fill: "purple"

  },
  {
    value: 6,
    name: "Mięso",
    fill: "blue"

  },
  {
    value: 3,
    name: "Ryby",
    fill: "green"

  },
  {
    value: 12,
    name: "Nabiał",
    fill: "yellow"

  }

];

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
        console.log(categoryList)


        const categoryObject = {}
        for (let i = 0; i < categoryList.length; i++) {
          if (categoryObject[categoryList[i]]) {

          } else {

          }
      }

        const endResult = {
          vegetables: 2,
          drinks: 2,
          other: 2,
          meat: 1,
        }
        this.setState(data)

      })
  }
  resizeListener = () => {
    console.log(window.innerWidth)
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
                  data={data}
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