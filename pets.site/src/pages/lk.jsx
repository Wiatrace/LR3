import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import photo from '../image/ava2-bg.webp'
import x from 'bootstrap-icons/icons/twitter-x.svg'

const Lk = () => {
    return (
        <div>
          <Header/>
          <section  className='sectio-col'>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-12 col-xl-4">
      
              <div class="card card-bord">
                <div class="card-body text-center">
                  <div class="mt-3 mb-4">
                    <img src={photo} class="rounded-circle img-fluid photo_wid" alt='' />
                  </div>
                  <h4 class="mb-2">Julie L. Arsenault</h4>
                  <p class="text-muted mb-4">+7(999)-999-99-99 <span class="mx-2">|</span> <a
                      href="#!">example@mail.ru</a></p>
                  <div class="mb-4 pb-2">
                    <button type="button" class="btn btn-outline-primary btn-floating">
                      <img src={x} alt=''/>
                    </button>
                    <button type="button" class="btn btn-outline-primary btn-floating">
                      <img src={x} alt=''/>
                    </button>
                    <button type="button" class="btn btn-outline-primary btn-floating">
                      <img src={x} alt=''/>
                    </button>
                  </div>
                  <button type="button" class="btn btn-primary btn-marg" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Редактирование
                  </button>
                  <ul class="list-group list-group-flush" >
                    <li class="list-group-item" >Адрес: Г.Санкт-Петербург, Пр. Авиаконструкторов 28.</li>
                    <li class="list-group-item">Дата рождения: 11.11.11</li>
                  </ul>
                </div>
              </div>
      
            </div>
          </div>
        </div>
      </section>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Редактирование профиля</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>
                <div class="modal-body">
                    <form class="w-50 m-auto p-3">
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Адрес электронной почты</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Номер телефона</label>
                            <input type="tel" class="form-control" id="exampleInputPassword1" required/>
                          </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Введите дату рождения</label>
                          <input type="date" class="form-control" id="exampleInputPassword1" required/>
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Пароль</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" required/>
                        </div>
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Введите повторно пароль</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" required/>
                      </div>
                      </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                  <button type="button" class="btn btn-primary">Сохранить изменения</button>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
    );
};
export default Lk;