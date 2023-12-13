import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Slide from '../components/slide';
import Card from '../components/card';

const Main = () => {
    return (
        <div>
          <Header/>
          <div class="search_animals"><div class="search_animals_text">Найденные животные</div></div>
          <div id="carouselExampleCaptions" class="carousel slide m-auto w-75">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" className="active" aria-current="true" data-bs-slide-to="0" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <Slide/>
            <Slide/>
            <Slide/>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Предыдущий</span>
        </button>   
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Следующий</span>
        </button>
      </div>
      <div class="search_animals"><div class="search_animals_text">Последние найденные животные</div></div>
      <div class="row row-cols-1 row-cols-md-3 g-4 card-ots">
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4 card-ots">
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div class="search_animals"><div class="search_animals_text">Подписка на новости</div></div>
      <form class="w-50 m-auto p-3">
        <div  class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Адрес электронной почты</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text">Мы никогда никому не передадим вашу электронную почту.</div>
        </div>
        <button type="submit" class="btn btn-primary card-ots">Отправить</button>
</form>
          <Footer/>
        </div>
    );
};
export default Main;