import {
  ShieldCheck,
  Scissors,
  Clock3,
  Sparkles,
  ArrowRight,
  Gem,
  CheckCircle2
} from 'lucide-react'

import hero from '../assets/hero.png'

export default function Hero() {
  return (
    <section className='hero'>
      <img src={hero} alt='' className='hero-bg' />

      <div className='hero-overlay' />

      <div className='container hero-content'>
        <div className='hero-left'>
          <div className='hero-badge'>
            <Sparkles size={18} />
            Премиальное ателье Санкт-Петербурга
          </div>

          <p className='hero-subtitle'>
            Качество • Индивидуальность • Совершенство
          </p>

          <h1>
            Сеть ателье <br />
            <span>«Стиль»</span>
          </h1>

          <p className='hero-text'>
            Профессиональный ремонт, пошив и реставрация одежды
            любой сложности. Современные технологии, премиальные
            материалы и мастера с опытом более 10 лет.
          </p>

          <div className='hero-actions'>
            <button className='primary-btn'>
              Записаться онлайн
            </button>

            <button className='secondary-btn'>
              Наши услуги
            </button>
          </div>

          <div className='hero-advantages'>
            <div className='advantage'>
              <CheckCircle2 size={18} />
              Работаем по договору
            </div>

            <div className='advantage'>
              <CheckCircle2 size={18} />
              Гарантия качества
            </div>

            <div className='advantage'>
              <CheckCircle2 size={18} />
              Соблюдаем сроки
            </div>
          </div>
        </div>

        <div className='hero-right'>
          <div className='hero-card'>
            <div className='hero-card-item active'>
              <div className='hero-card-icon'>
                <Scissors size={24} />
              </div>

              <div>
                <h3>Ремонт одежды</h3>
                <p>Любой сложности</p>
              </div>

              <ArrowRight size={20} />
            </div>

            <div className='hero-card-item'>
              <div className='hero-card-icon'>
                <Gem size={24} />
              </div>

              <div>
                <h3>Пошив на заказ</h3>
                <p>Индивидуальный подход</p>
              </div>

              <ArrowRight size={20} />
            </div>

            <div className='hero-card-item'>
              <div className='hero-card-icon'>
                <Clock3 size={24} />
              </div>

              <div>
                <h3>Срочные заказы</h3>
                <p>Выполним точно в срок</p>
              </div>

              <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className='hero-bottom'>
        <div className='container hero-bottom-grid'>
          <div className='bottom-item'>
            <ShieldCheck />

            <div>
              <h4>Опыт мастеров</h4>
              <p>Более 10 лет работы</p>
            </div>
          </div>

          <div className='bottom-item'>
            <Gem />

            <div>
              <h4>Премиальные материалы</h4>
              <p>Проверенные поставщики</p>
            </div>
          </div>

          <div className='bottom-item'>
            <Clock3 />

            <div>
              <h4>Соблюдение сроков</h4>
              <p>Точно в назначенное время</p>
            </div>
          </div>

          <div className='bottom-item'>
            <Sparkles />

            <div>
              <h4>Гарантия качества</h4>
              <p>На все виды работ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}