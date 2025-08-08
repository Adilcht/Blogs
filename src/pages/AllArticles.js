import React, { useEffect, useState } from "react";

function AllArticles() {
  const [localArticles, setLocalArticles] = useState([]);
  const [apiArticles, setApiArticles] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("articles")) || [];
    setLocalArticles(stored);

    fetch("https://newsapi.org/v2/everything?q=blog&apiKey=1207cf4b22de45f48ad4a6aaa970ccc4")
      .then((res) => res.json())
      .then((data) => {
        setApiArticles(data.articles.slice(0, 6));
      });
  }, []);

  return (
    <div>
      <h2>Articles publiés</h2>

      <div className="grid-2cols">
        {localArticles.map((a, i) => (
          <div key={i} className="card">
            {a.image && <img src={a.image} alt="img" style={{ maxWidth: "100%", borderRadius: "8px" }} />}
            <h3>{a.title}</h3>
            <p>{a.content}</p>
          </div>
        ))}
      </div>

      <h2>Articles de l’API</h2>

      <div className="grid-2cols">
        {apiArticles.map((a, i) => (
          <div key={i} className="card">
            {a.urlToImage && <img src={a.urlToImage} alt="img" style={{ maxWidth: "100%", borderRadius: "8px" }} />}
            <h3>{a.title}</h3>
            <p>{a.description}</p>
            <a href={a.url} target="_blank" rel="noopener noreferrer">
              Lire plus
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllArticles;
