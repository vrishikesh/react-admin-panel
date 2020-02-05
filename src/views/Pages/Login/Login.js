import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { connect } from 'react-redux';
import actionCreators from '../../../actionCreators'
// import loader from '../../../components/Loader'

const mapStateToProps = (state) => {
  return {
    loading: state.login.loading,
    token: state.login.token,
    error: state.city.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginInitiate: (email, password) => dispatch(actionCreators.login.loginInitiate(email, password))
  }
}

class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  updateFieldState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    if (this.props.token.length > 0) {
      this.props.history.push('/dashboard')
    }

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" name="email" onChange={this.updateFieldState} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="password" placeholder="Password" autoComplete="current-password" onChange={this.updateFieldState} />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button onClick={() => this.props.loginInitiate(this.state.email, this.state.password)} color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Link to='/forgot-password'>
                            <Button color="link" className="px-0">Forgot password?</Button>
                          </Link>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                {/*<Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
    </Card>*/}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
