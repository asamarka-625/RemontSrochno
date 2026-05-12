export default function Pricing() {
  return (
    <section id='prices' className='section'>
      <div className='container'>

        <div className='section-title'>
          <h2>Цены на услуги</h2>
        </div>

        <div className='pricing-grid'>
          
          {/* LEFT */}
          <div className='pricing-left'>
            <div className='price-table'>
              {[
                ['Укоротить брюки', 'от 800 ₽'],
                ['Замена молнии', 'от 1200 ₽'],
                ['Подгонка по фигуре', 'от 1500 ₽'],
                ['Пошив платья', 'от 7000 ₽']
              ].map(([title, price]) => (
                <div className='price-row' key={title}>
                  <span>{title}</span>
                  <strong>{price}</strong>
                </div>
              ))}
            </div>

            <p className='price-note'>
              Точная стоимость зависит от сложности изделия и материала.
            </p>
          </div>

          {/* RIGHT */}
          <div className='pricing-offer'>
            <div className='offer-content'>
              <h3>Скидка 10%</h3>
              
              <p>Специальное предложение: скидка 10% на первый заказ для всех новых клиентов</p>

              <button className='primary-btn'>
                Получить скидку
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}