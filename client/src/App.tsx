import { Provider } from 'react-redux';
import { store } from './redux/store'; 
import Watchlist from './components/Watchlist';
import MovieList from './components/MovieList';
import './App.css'; 


function App() {
  return (
    <Provider store={store}>
      <MovieList/>
      <Watchlist />
    </Provider>
  );
}

export default App;
