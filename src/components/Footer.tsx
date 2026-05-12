export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container footer-grid'>

        {/* BRAND */}
        <div className='footer-block'>
          <h3>Ателье «Стиль»</h3>
          <p>Качество • Индивидуальность • Совершенство</p>
        </div>

        {/* SERVICES */}
        <div className='footer-block'>
          <h4>Наши услуги</h4>
          <ul>
            <li>Зашить дырки</li>
            <li>Реставрация кожи / меха</li>
            <li>Удлинить / укоротить</li>
            <li>Подгонка по фигуре</li>
            <li>Замена молний и кнопок</li>
            <li>Устранение дефектов</li>
            <li>Добавить карман / элементы</li>
            <li>Вызов курьера на дом</li>
          </ul>
        </div>

        {/* WORKSHOPS */}
        <div className='footer-block'>
          <h4>Мастерские</h4>
          <ul>
            <li>пр. Культуры 22 к.1 | +7 (911) 771-76-20</li>
            <li>пр. Науки 21 к1 | +7 (981) 192-74-79</li>
            <li>пр. Художников 30 к1 | +7 (921) 917-95-71</li>
            <li>ул. Меркурьева 7 | +7 (981) 795-09-30</li>
          </ul>
        </div>

        {/* ABOUT */}
        <div className='footer-block'>
          <h4>О фирме</h4>
          <p>
            «Стиль» — сеть мастерских по ремонту одежды.
            Выполняем полный спектр работ по ремонту и реставрации одежды
            из любых материалов, включая мех, кожу и сумки.
          </p>

          <p>
            Телефон администрации: <br />
            8 (812) 945-64-98
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className='footer-bottom'>
        <div className='container'>
          <p>© 2025 Ателье «Стиль». Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}