import React from 'react';
import CityList from '../containers/city_list'
import SelectedCity from '../components/selected_city'

const App = () => {
  return (
    <div className="app">
      <CityList />
      <SelectedCity />
    </div>
  );
};

export default App;
