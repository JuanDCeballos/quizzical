import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [gameStatus, setGameStatus] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (gameStatus) {
      const fetchData = async () => {
        try {
          const response = await fetch('https://opentdb.com/api.php?amount=5');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setData(jsonData.results);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, [gameStatus]);

  return (
    <div className='container'>
      <div className='top-img'>
        <img src='blobslemon.png' />
      </div>
      <main className='main-content'>
        <div className='content-container'>
          {gameStatus ? (
            <h1>melo</h1>
          ) : (
            <>
              <h1 className='title'>Quizzical</h1>
              <p className='game-desc'>A funny question app</p>
            </>
          )}
          <button
            className='cta cta-start'
            onClick={() => setGameStatus((prevGameStatus) => !prevGameStatus)}
          >
            Star quiz
          </button>
        </div>
      </main>
      <div className='bottom-img'>
        <img src='blobsbaby.png' />
      </div>
    </div>
  );
};

export default App;
