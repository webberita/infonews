fetch("data/news.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("news-list");
    data.forEach(article => {
      const card = document.createElement("div");
      card.innerHTML = `
        <h2>${article.title}</h2>
        <img src="${article.image}" width="300" alt="Thumbnail">
        <p><a href="article.html?id=${article.id}">Baca selengkapnya</a></p>
      `;
      list.appendChild(card);
    });
  });
