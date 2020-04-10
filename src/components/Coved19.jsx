import React, { Component } from 'react';

class componentName extends Component {
  state = {
    confirmed: '',
    recovered: '',
    deaths: '',
  };

  componentDidMount() {
    fetch('https://covid19.mathdro.id/api')
      .then((res) => res.json())
      .then((resData) => {
        this.setState({
          confirmed: resData.confirmed.value,
          recovered: resData.recovered.value,
          deaths: resData.deaths.value,
        });
      });
  }

  render() {
    return (
      <div className='container mt-5 text-center'>
        <div className='row'>
          <div className='col-sm-3 bg-dark m-2 p-2' style={{ height: '200px' }}>
            <h1 style={{ color: 'white' }}>Confiemed</h1>
            <h1 className='text-warning' style={{ color: 'green' }}>
              {this.state.confirmed}
            </h1>
          </div>
          <div className='col-sm-3 bg-dark m-2 p-2' style={{ height: '200px' }}>
            <h1 style={{ color: 'white' }}>Recoverd</h1>
            <h1 className='text-warning'>{this.state.recovered}</h1>
          </div>
          <div className='col-sm-3 bg-dark m-2 p-2' style={{ height: '200px' }}>
            <h1 style={{ color: 'white' }}>Deaths</h1>
            <h1 className='text-warning'>{this.state.deaths}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default componentName;
