import Question from './components/Question';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

const App = () => {
  const [gameStatus, setGameStatus] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://opentdb.com/api.php?amount=5&type=multiple'
      );
      const fetchedData = await response.json();
      setData(fetchedData.results);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    if (gameStatus) {
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
          {gameStatus && data.length > 0 ? (
            <>
              {data.map((d) => (
                <Question key={nanoid()} data={d} />
              ))}
            </>
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
