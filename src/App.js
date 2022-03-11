import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import SingleTopic from './components/SingleTopic';
import SingleArticle from "./components/SingleArticle"

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage articles={articles} setArticles={setArticles}/>} />
          <Route path="/topics/:topic/articles" element={<SingleTopic articles={articles} setArticles={setArticles}/>} />
          <Route path="/articles/:article_id" element={<SingleArticle articles={articles} setArticles={setArticles}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
