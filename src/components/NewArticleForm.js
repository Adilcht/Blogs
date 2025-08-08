import React, { useState } from "react";

function NewArticleForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      setMessage("Veuillez remplir tous les champs.");
      return;
    }

    const newArticle = { title, content };
    const oldArticles = JSON.parse(localStorage.getItem("articles")) || [];
    localStorage.setItem("articles", JSON.stringify([newArticle, ...oldArticles]));
    setMessage("Article publié avec succès !");
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Contenu"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Publier</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default NewArticleForm;
