// import React, { Component } from 'react';
// import City from './city';
// import { setCities } from '../actions';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';


// class CityList extends Component {
//     static defaultProps = {
//         cities: [{
//             name: "Paris",
//             address: '16 Villa Gaudelet, 75011 Paris',
//             slug: "Paris",
//         }]
//     }

//     componentWillMount() {
//         console.log('mounting');
//         this.props.setCities()
//     }

//     renderList() {
//         return this.props.cities.map((city) => {
//             return (
//                 <City key={city.name} city={city} />
//             );
//         });
//     };

//     render() {
//         return (
//             <ul className="list-group cities">
//                 {this.renderList()}
//             </ul>
//         );
//     }
// };

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(
//         { setCities: setCities },
//         dispatch
//     );
// }

// function mapStateToProps(state) {
//  return {
//  flats: state.flats
//  };
// }

// export default connect(mapStateToProps, mapDispatchToProps)
// (CityList);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import City from '../containers/city';

class CityList extends Component {
  renderList() {
    return this.props.cities.map((city) => {
      return (
        <City key={city.name} city={city} />
      );
    });
  };

  render() {
    return (
      <ul className="list-group cities">
        {this.renderList()}
      </ul>
    );
  }
};

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps)(CityList);