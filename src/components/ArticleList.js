import React, { useEffect, useState } from "react";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=blog&apiKey=1207cf4b22de45f48ad4a6aaa970ccc4")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles.slice(0, 5)); // les 5 premiers articles
      });
  }, []);

  return (
    <div className="article-list">
      {articles.map((article, i) => (
        <div key={i} className="card">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Lire plus</a>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
