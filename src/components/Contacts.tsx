export default function Contacts() {
  return (
    <section id='contacts' className='section gray'>
      <div className='container contacts-grid'>

        {/* LEFT */}
        <div className='contacts-left'>
          <div className='section-title left'>
            <h2>Контакты</h2>
          </div>

          <p className='contacts-text'>
            Мы всегда рады вашим обращениям. Запишитесь на консультацию
            или приезжайте к нам в ателье лично.
          </p>

          <div className='contacts-list'>
            <p>+7 (812) 345-67-89</p>
            <p>Санкт-Петербург</p>
            <p>Невский проспект, 123</p>
            <p>info@atelier-style.ru</p>
          </div>
        </div>

        {/* RIGHT - YANDEX MAP */}
        <div className='contacts-map'>
          <iframe
            src="https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=true&source=constructor-api&um=constructor%3A9d5f7476033f10dca770c97d3b86a5d04e893bb48db118f92847de1433cdb985"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Карта ателье"
          />
        </div>

      </div>
    </section>
  )
}