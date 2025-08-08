import React, { useEffect, useState } from "react";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=blog&apiKey=1207cf4b22de45f48ad4a6aaa970ccc4")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles.slice(0, 6)); // 6 articles
      });
  }, []);

  return (
    <div>
      <h1 className="main-title">Bienvenue sur SimpleBlog</h1>
      <p className="description">
        Découvrez les derniers articles de blog et partagez vos propres histoires avec notre communauté.
      </p>

      <div className="grid-2cols">
        {articles.map((article, i) => (
          <div key={i} className="card">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt="img"
                style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
              />
            )}
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Lire plus
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
