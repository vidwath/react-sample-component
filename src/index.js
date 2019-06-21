import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
class Fancy extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <div>This is so Fancy!</div>
      </Provider>
    );
  }
}
export default Fancy;