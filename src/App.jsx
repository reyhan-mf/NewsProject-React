import { useState, useEffect } from 'react';

import './App.css';
import Container from './components/Container';
import Navbar from './components/Navbar';

import { getNews } from './services/getNews';

function App() {
  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTechNews = async () => {
      setLoading(true);

      const res = await getNews({ searchQuery: 'technology' });
      
      if(!res){
        setLoading(false);
        setError(true);

        return
      }
    }

    fetchTechNews()

  },[])
  return (
    <>
    <Container>
      <Navbar />
    </Container>
    </>
  )
}

export default App
