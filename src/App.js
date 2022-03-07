import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Coding from './components/Coding';
import Football from './components/Football';
import Cooking from './components/Cooking';
// import SingleArticle from './components/SingleArticle'

function App() {
  const [topic, setTopic] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
        <Header setFilter={setTopic}/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/coding" element={<Coding topic="coding"/>} />
          <Route path="/football" element={<Football topic="football"/>} />
          <Route path="/cooking" element={<Cooking topic="cooking"/>} />
          {/* <Route path="/articles/:article_id" element={<SingleArticle topic={""}/>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
