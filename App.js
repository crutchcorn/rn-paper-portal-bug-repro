import React from 'react';
import {TextInput} from 'react-native';
import {Portal, Provider} from 'react-native-paper';

const App = () => {
  const [val, setVal] = React.useState('');

  return (
    <Provider>
      <Portal>
          <TextInput style={{borderWidth: 2}} placeholder={"Test"} value={val} onChangeText={setVal} />
      </Portal>
    </Provider>
  );
};

export default App;
