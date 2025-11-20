import * as prismic from "https://esm.sh/@prismicio/client";
import { asText, asHTML } from "https://esm.sh/@prismicio/helpers";

const client = prismic.createClient("maisciencia");

async function loadActivities() {
  const docs = await client.getByType("activity");
  const grid = document.getElementById("activities-grid");

  if (!docs.results.length) {
    grid.innerHTML = "<p>Nenhuma atividade publicada no Prismic.</p>";
    return;
  }

  grid.innerHTML = docs.results.map((doc) => {
    const title = asText(doc.data.title);
    const description = doc.data.descricao ? asHTML(doc.data.descricao) : "";
    const imgURL = doc.data.imagem?.url ?? "";

    return `
      <article class="activity">
        ${imgURL ? `<img src="${imgURL}" alt="${title}" class="activity-image">` : ""}
        <div class="activity-content">
          <h3 class="activity-title">${title}</h3>
          <div class="activity-text">${description}</div>
        </div>
      </article>
    `;
  }).join("");
}

loadActivities();
