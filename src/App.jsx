import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";
import Error from "./components/Error";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";

import { getNews } from "./services/getNews";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const DEFAULT_SEARCH_QUERY = "technology";

  useEffect(() => {
    const fetchTechNews = async () => {
      setLoading(true);

      const res = await getNews({ searchQuery: id || DEFAULT_SEARCH_QUERY });

      if (!res) {
        setLoading(false);
        setError(true);

        return;
      }
      setLoading(false);
      console.log(res.articles[0].title);
      setArticles(res.articles);
    };

    fetchTechNews();
  }, [id]);
  return (
    <>
      <Container>
        <Navbar />
        {loading && <Loading />}
        {error && <Error />}
        {!loading && articles.length > 0 && <NewsList articles={articles} />}
      </Container>
    </>
  );
}

export default App;
