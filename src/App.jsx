import './App.css';

const App = () => {
  return (
    <div className='container'>
      <div className='top-img'>
        <img src='blobslemon.png' />
      </div>
      <main className='main-content'>
        <div className='content-container'>
          <h1 className='title'>Quizzical</h1>
          <p className='game-desc'>A funny question app</p>
          <button className='cta cta-start'>Star quiz</button>
        </div>
      </main>
      <div className='bottom-img'>
        <img src='blobsbaby.png' />
      </div>
    </div>
  );
};

export default App;
