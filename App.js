import React from 'react';
import {TextInput} from 'react-native';
import {Dialog, Portal, Provider} from 'react-native-paper';

const App = () => {
  const [val, setVal] = React.useState('');

  return (
    <Provider>
      <Portal>
        <Dialog visible={true}>
          <TextInput value={val} onChangeText={setVal} />
        </Dialog>
      </Portal>
    </Provider>
  );
};

export default App;
