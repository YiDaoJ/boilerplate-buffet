import './App.scss';
import { Button } from './components';

function App() {
  return (
    <>
      <Button color="danger" onClick={() => alert('click successfully')}>
        Click on me
      </Button>
    </>
  );
}

export default App;
