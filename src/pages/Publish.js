import React, { useState } from "react";

function Publish() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");

  // Convertit l'image uploadée en base64
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setImageFile(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim() || !imageFile) {
      setMessage("Tous les champs sont obligatoires.");
      return;
    }

    const newArticle = { title: title.trim(), content: content.trim(), image: imageFile };
    let oldArticles = JSON.parse(localStorage.getItem("articles")) || [];

    // Limite à 10 articles max
    if (oldArticles.length >= 10) {
      setMessage("Vous avez atteint la limite de 10 articles. Supprimez-en avant d’en ajouter.");
      return;
    }

    oldArticles.unshift(newArticle);

    try {
      localStorage.setItem("articles", JSON.stringify(oldArticles));
      setMessage("Article publié !");
      setTitle("");
      setContent("");
      setImageFile(null);
      e.target.reset(); // reset formulaire, notamment input file
    } catch (error) {
      setMessage("Erreur de stockage : espace local insuffisant.");
    }
  };

  return (
    <div>
      <h2>Publier un nouvel article</h2>
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
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <button type="submit">Publier</button>
      </form>
      {message && (
        <p style={{ color: message.includes("publie") ? "green" : "red" }}>{message}</p>
      )}
    </div>
  );
}

export default Publish;
