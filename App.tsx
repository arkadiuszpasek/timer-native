import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './src/reducers';
import Timer from './src/components/timer/Timer';

const store = createStore(reducers);

export default function App() {
  return (
    <Provider store={store}>
      <Timer />
    </Provider>
  );
}
