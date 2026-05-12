import { Sparkles, User, Clock, ShieldCheck } from 'lucide-react'

const items = [
  {
    title: 'Премиальные материалы',
    text: 'Используем только качественные ткани и фурнитуру от проверенных поставщиков.',
    icon: Sparkles
  },
  {
    title: 'Индивидуальный подход',
    text: 'Каждое изделие подгоняется строго под особенности фигуры клиента.',
    icon: User
  },
  {
    title: 'Соблюдение сроков',
    text: 'Всегда выполняем заказы точно в оговорённые сроки без задержек.',
    icon: Clock
  },
  {
    title: 'Гарантия качества',
    text: 'Контролируем каждый этап работы и отвечаем за результат.',
    icon: ShieldCheck
  }
]

export default function Advantages() {
  return (
    <section className='section gray'>
      <div className='container'>
        <div className='section-title'>
          <h2>Почему выбирают нас</h2>
        </div>

        <div className='advantages-grid'>
          {items.map((item) => {
            const Icon = item.icon

            return (
              <div className='advantage-card' key={item.title}>
                <div className='advantage-icon'>
                  <Icon size={26} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}