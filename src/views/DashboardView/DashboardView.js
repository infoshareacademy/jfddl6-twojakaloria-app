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
  button: {
    margin: 10,
  }
}

class Dashboard extends React.Component {
  state = {
    viewportWidth: window.innerWidth
  }

  componentDidMount() {
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

  render() {
    return (
      <Paper
        style={style.paper}>
        <Grid>
          <Row middle="xs" center='xs'>
            <Col lg={3}>
              <Link to='/productlist'>
                <Button
                  style={style.button}
                  label={'Go to list'}
                  fullWidth={true}
                />
              </Link>
            </Col>
            <Col lg={1} />
            <Col lg={3}>
              <Link to='/favouritelist'>
                <Button
                  style={style.button}
                  label={'Go to favourites'}
                  fullWidth={true}
                />
              </Link>
            </Col>
            <Col lg={1} />
            <Col lg={3}>
              <Link to='/addproduct'>
                <Button
                  style={style.button}
                  label={'Add new item'}
                  fullWidth={true}
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