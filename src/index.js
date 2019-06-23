import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
class Sample extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <div>This is so Sample component having store!</div>
      </Provider>
    );
  }
}
export default Sample;