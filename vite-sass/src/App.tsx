import { useEffect, useState } from 'react';
import './App.scss';
import { getGreeting } from './api/api';
import { Button } from './components';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    getGreeting().then((data) => {
      setMsg(data.message);
    });
  }, []);

  return (
    <>
      <Button color="danger" onClick={() => alert('click successfully')}>
        Click on me
      </Button>
      <div>{msg}</div>
    </>
  );
}

export default App;
