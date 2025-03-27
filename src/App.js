import './App.css'
import AppBar from './components/AppBar/AppBar';
import BoardBar from './components/BoardBar/BoardBar';
import BoardContent from './components/BoardContent/BoardContent';
function App() {
  return (
    <div  className="trello-main">
      <AppBar />
      <BoardBar />
      <BoardContent />
    </div>
  );
}

export default App;
