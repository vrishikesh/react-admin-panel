import React, { Component, Suspense } from 'react'
import { connect } from 'react-redux'
import actionCreators from '../../../actionCreators'
import loading from '../../../components/Loader'

const mapStateToProps = (state) => {
  return {
    cities: state.city.cities,
    error: state.city.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCity: () => dispatch(actionCreators.city.fetchCity())
  }
}

class City extends Component {

  componentDidMount = async () => {
    this.props.fetchCity()
  }

  render() {

    const citiesMap = this.props.cities.length ? this.props.cities.map((city, idx) => (
      <tr key={city.id}>
        <th scope="row">{idx + 1}</th>
        <td>{city.cityName}</td>
        <td>{city.currency}</td>
        <td>{city.currencySymbol}</td>
      </tr>
    )) : <tr><th scope="col" colSpan="4">No cities found</th></tr>

    /*const columns = [
      {
        name: 'Name',
        selector: 'cityName'
      },
      {
        name: 'Currency',
        selector: 'currency'
      },
      {
        name: 'Symbol',
        selector: 'currencySymbol'
      },
    ]
    <DataTable title="City" columns={columns} data={this.props.cities} />*/

    return (
      <React.Fragment>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Currency</th>
              <th scope="col">Symbol</th>
            </tr>
          </thead>
          <tbody>
            <Suspense fallback={loading()}>
              { citiesMap }
            </Suspense>
          </tbody>
        </table>
      </React.Fragment>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(City)
