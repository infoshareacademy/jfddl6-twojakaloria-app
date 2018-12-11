import React from 'react'
import Button from './Button'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'
import PieChart from '../../components/PieChart'
import BarChart from './BarChart'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'
import { throws } from 'assert';


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
    const now = new Date()
    const todayMidnightTimestmap = now.getTime()
      - now.getHours() * 60 * 60 * 1000
      - now.getMinutes() * 60 * 1000
      - now.getSeconds() * 1000
      - now.getMilliseconds()

    const week = {
      today: todayMidnightTimestmap,
      day1before: todayMidnightTimestmap - 1 * 24 * 60 * 60 * 1000,
      day2before: todayMidnightTimestmap - 2 * 24 * 60 * 60 * 1000,
      day3before: todayMidnightTimestmap - 3 * 24 * 60 * 60 * 1000,
      day4before: todayMidnightTimestmap - 4 * 24 * 60 * 60 * 1000,
      day5before: todayMidnightTimestmap - 5 * 24 * 60 * 60 * 1000,
      day6before: todayMidnightTimestmap - 6 * 24 * 60 * 60 * 1000
    }

    const numbersOfLogins = {
      today: this.props._users.filter(timestamp => week.today <= timestamp).length,
      day1before: this.props._users.filter(timestamp => week.day1before <= timestamp && week.today > timestamp).length,
      day2before: this.props._users.filter(timestamp => week.day2before <= timestamp && week.day1before > timestamp).length,
      day3before: this.props._users.filter(timestamp => week.day3before <= timestamp && week.day2before > timestamp).length,
      day4before: this.props._users.filter(timestamp => week.day4before <= timestamp && week.day3before > timestamp).length,
      day5before: this.props._users.filter(timestamp => week.day5before <= timestamp && week.day4before > timestamp).length,
      day6before: this.props._users.filter(timestamp => week.day6before <= timestamp && week.day5before > timestamp).length
    }
    
    const data = [
      {
        time: "Today",
        users: numbersOfLogins.today,
        fill: "black"
      },
      {
        time: "-1",
        users: numbersOfLogins.day1before,
        fill: "pink"
      },
      {
        time: "-2",
        users: numbersOfLogins.day2before,
        fill: "purple"
      },
      {
        time: "-3",
        users: numbersOfLogins.day3before,
        fill: "green"

      },
      {
        time: "-4",
        users: numbersOfLogins.day4before,
        fill: "yellow"
      },
      {
        time: "-5",
        users: numbersOfLogins.day5before,
        fill: "blue"
      },
      {
        time: "-6",
        users: numbersOfLogins.day6before,
        fill: "red"

      },
    ]
    console.log(numbersOfLogins)

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
                  data={data}
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


const mapStateToProps = state => ({
  _users: state.userLog.logs
})

const dispatchPropsToState = dispatch => ({

})

export default connect(
  mapStateToProps,
  dispatchPropsToState
)(Dashboard)