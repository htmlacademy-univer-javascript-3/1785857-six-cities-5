import Main from '../main/main';

type AppProps = {
  placesNumber: number;
}

function App({placesNumber}: AppProps): JSX.Element {
  return (
    <Main placesNumber={placesNumber}/>
  );
}

export default App;
