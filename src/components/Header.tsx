export default function Header() {
  return (
    <header className='header'>
      <div className='container nav'>
        <div className='logo'>Ателье «Стиль»</div>

        <nav>
          <a href='#services'>Услуги</a>
          <a href='#works'>Работы</a>
          <a href='#prices'>Цены</a>
          <a href='#about'>О нас</a>
          <a href='#contacts'>Контакты</a>
        </nav>

        <button className='primary-btn'>Записаться</button>
      </div>
    </header>
  )
}