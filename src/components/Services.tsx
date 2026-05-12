import { Scissors, Shirt, Sparkles } from 'lucide-react'

const services = [
  {
    title: 'Ремонт одежды',
    icon: Scissors,
    items: ['Укоротить брюки', 'Замена молнии', 'Подгонка по фигуре']
  },
  {
    title: 'Пошив на заказ',
    icon: Shirt,
    items: ['Костюмы', 'Платья', 'Рубашки']
  },
  {
    title: 'Реставрация',
    icon: Sparkles,
    items: ['Восстановление ткани', 'Ремонт кожи', 'Обновление изделий']
  }
]

export default function Services() {
  return (
    <section id='services' className='section gray'>
      <div className='container'>
        <div className='section-title'>
          <h2>Популярные услуги</h2>
          <p>Профессиональная работа с любыми типами тканей.</p>
        </div>

        <div className='services-row'>
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div className='service-card' key={service.title}>
                <div className='service-header'>
                  <Icon size={24} />
                  <h3>{service.title}</h3>
                </div>

                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <p className='services-footer'>
          Мы ценим ваше время и доверие. Каждое изделие обрабатывается с
          максимальной тщательностью и возвращается к вам в идеальном виде.
        </p>
      </div>
    </section>
  )
}