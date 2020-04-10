import React, { Component } from 'react';

class SingleCountry extends Component {
  state = {
    countries: [],
    load: false,
    countryName: '',
    confirmed: '',
    recovered: '',
    deaths: '',
  };

  componentDidMount() {
    fetch('https://covid19.mathdro.id/api/countries')
      .then((res) => res.json())
      .then((resData) => {
        this.setState({
          countries: resData.countries,
        });
      });
  }

  clickHandler = (e) => {
    fetch(`https://covid19.mathdro.id/api/countries/${e.target.value}`)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        this.setState({
          load: true,
          confirmed: resData.confirmed.value,
          recovered: resData.recovered.value,
          deaths: resData.deaths.value,
        });
      });
  };

  render() {
    return (
      <div className='container mt-5 text-center'>
        <div className='row'>
          <div className='col-sm-2'></div>
          <div className='col-sm-4'>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <label
                  className='input-group-text bg-dark text-warning'
                  htmlFor='inputGroupSelect01'
                >
                  Select Country
                </label>
              </div>
              <select
                onChange={this.clickHandler}
                className='custom-select'
                id='inputGroupSelect01'
              >
                <option>Choose...</option>
                {this.state.countries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='col-sm-6'></div>
          </div>
        </div>

        {this.state.load && (
          <div className='row mt-5'>
            <div
              className='col-sm-3 bg-success m-2 p-2'
              style={{ height: '200px' }}
            >
              <h1 style={{ color: 'white' }}>Confiemed</h1>
              <h1 className='text-warning font-weight-bold'>
                {this.state.confirmed}
              </h1>
            </div>
            <div
              className='col-sm-3 bg-primary m-2 p-2'
              style={{ height: '200px' }}
            >
              <h1 style={{ color: 'white' }}>Recoverd</h1>
              <h1 className='text-warning font-weight-bold'>
                {this.state.recovered}
              </h1>
            </div>
            <div
              className='col-sm-3 bg-danger m-2 p-2'
              style={{ height: '200px' }}
            >
              <h1 style={{ color: 'white' }}>Deaths</h1>
              <h1 className='text-warning font-weight-bold'>
                {this.state.deaths}
              </h1>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SingleCountry;
