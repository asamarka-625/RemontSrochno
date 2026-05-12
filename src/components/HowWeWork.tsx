import { ClipboardList, MessageCircle, Scissors, PackageCheck } from 'lucide-react'

const steps = [
  {
    title: 'Заявка',
    icon: ClipboardList,
    text: 'Вы оставляете заявку на сайте или по телефону'
  },
  {
    title: 'Консультация',
    icon: MessageCircle,
    text: 'Уточняем детали и предлагаем лучшее решение'
  },
  {
    title: 'Выполнение',
    icon: Scissors,
    text: 'Мастера выполняют работу с вниманием к деталям'
  },
  {
    title: 'Выдача',
    icon: PackageCheck,
    text: 'Вы получаете готовое изделие в идеальном виде'
  }
]

export default function HowWeWork() {
  return (
    <section className='section gray'>
      <div className='container'>
        <div className='section-title'>
          <h2>Как мы работаем</h2>
        </div>

        <div className='steps-grid'>
          {steps.map((step) => {
            const Icon = step.icon

            return (
              <div className='step-card' key={step.title}>
                <div className='step-icon'>
                  <Icon size={26} />
                </div>

                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}