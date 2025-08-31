import { useEffect, useState } from 'react';

import './App.css';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import Error from './components/Error';
import NewsList from './components/NewsList';

import { getNews } from './services/getNews';

function App() {
  const [articles, setArticles] = useState([]);
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
      setLoading(false);
      console.log(res.articles[0].title);
      setArticles(res.articles);
    }

    fetchTechNews()

  },[])
  return (
    <>
    <Container>
      <Navbar />
      {loading && <Loading/>}
      {error && <Error/>}
      {(!loading && articles.length > 0) && (
        <NewsList articles={articles} />
      )}
    </Container>
    </>
  )
}

export default App
