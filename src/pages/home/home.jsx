import './home.css';
import { Link } from 'react-router-dom';

export function Home(){
    return(
        <>
       <div className="container">
          <div className="main_inner">
             <section className="banner">
                 <nav className="slogan">
                     <a className='banner_text'>МОРСКОЙ</a>
                     <a className='banner_text'>РЕСТОРАН</a>
                     <a className='banner_text'>В САМОМ</a>
                     <a className='banner_text'>ЦЕНТРЕ</a>
                     <a className='banner_text'>ПИТЕРА</a>
                     <a href="/catalog" className='banner_btn'>ЗАБРОНИРОВАТЬ СТОЛ</a>
                 </nav>
                 <img className='banner_img' src='/banner.png' alt='красивая картиночка'></img>
              </section>
         </div>
      </div>
      
      <div className="container">
          <div className="contacts_inner">
             <section className="contacts">
                 <nav className="text_contacts" align='left'>
                     <h1>САНКТ-ПЕТЕРБУРГ, <br/>
                     Невский пр., 14</h1>
                     <a className='contacts_week'>Понедельник-Четверг</a>
                     <a className='contacts_time'>12:00 - 0:00</a>
                     <a className='contacts_week'>Пятница-Воскресенье</a>
                     <a className='contacts_time'>12:00 - 2:00</a>
                     <a className='contacts_time'>Следите за нами в соц сетях</a>
                     <div className="icons_contacts">
                        <a href='https://t.me/latifagil'><img src='/TelegramApp.svg' alt='tg'></img></a>
                        <a href='https://vk.com/latifagil'><img src='/VKcom.svg' alt='VK'></img></a>
                     </div>
                 </nav>
                 <iframe className='map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A2adbf039efc2da8c755be9cdfd1f8c59759ef892e515b9fdda181c7b6b3aa9f4&amp;source=constructor" width="410" height="410" frameborder="0"></iframe>
              </section>
         </div>
      </div>
     </>
    )
}