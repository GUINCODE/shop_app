import { Provider } from 'react-redux';
import PhoneContainer from "./Components/PhoneContainer";
import TvContainer from './Components/TvContainer';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <PhoneContainer />
      <TvContainer />
    </Provider>
  );
}

export default App;
