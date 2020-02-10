// import React from "react";
// import selectCity from '../actions';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

// const City = (props) => {
//     return (
//         <li
//             className="list-group-item"
//             onClick={() => props.selectCity(props.city)}
//         >{props.city.name}</li>
//     );
// };

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(
//         { selectCity: selectCity }, dispatch);
// }

// function mapStateToProps(state) {
//     return {
//         selectedCity: state.selectedCity
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(City);

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selectCity from '../actions/index';

const City = (props) => {
  return (
    <li
      className="list-group-item"
      onClick={() => props.selectCity(props.city)}
    >{props.city.name}</li>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);