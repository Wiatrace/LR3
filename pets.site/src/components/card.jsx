import React from "react";
import card_img from "../image/149364-obezyana-nazemnye_zhivotnye-prirodnyj_zapovednik-chelovek-zhivaya_priroda-1920x1080.jpg"
const Card = ()  => {
return(
<div>
<div class="col">
    <div class="card">
      <img src={card_img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Заголовок карточки</h5>
        <p class="card-text">Это более длинная карта С вспомогательным текстом ниже в качестве естественного перехода к дополнительному контенту. Этот контент немного длиннее.</p>
      </div>
    </div>
  </div>
</div>
);
};
export default Card;