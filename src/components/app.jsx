// import React from 'react';
// import CityList from '../containers/city_list';
// import City from '../containers/city';

// const App = () => {
//   return (
//     <div className="app">
//       <CityList  />
//     </div>
//   );
// };

// export default App;

import React from 'react';

import CityList from '../containers/city_list';
import ActiveCity from '../containers/active_city';

const App = () => {
  return (
    <div className="app">
      <CityList />
      <ActiveCity />
    </div>
  );
};

export default App;