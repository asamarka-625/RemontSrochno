import atelier from '../assets/atelier.png'

export default function About() {
  return (
    <section id='about' className='section'>
      <div className='container about-grid'>

        {/* LEFT IMAGE */}
        <div className='about-image'>
          <img src={atelier} alt='Ателье интерьер' />
        </div>

        {/* RIGHT CONTENT */}
        <div className='about-content'>

          <div className='section-title left'>
            <h2>О нашем ателье</h2>
          </div>

          <p className='about-text'>
            Мы работаем более 10 лет и создаем качественные изделия,
            которые идеально сидят по фигуре.
          </p>

          {/* STATS */}
          <div className='stats'>
            <div className='stat-card'>
              <strong>10+</strong>
              <span>лет опыта</span>
            </div>

            <div className='stat-card'>
              <strong>5000+</strong>
              <span>клиентов</span>
            </div>

            <div className='stat-card'>
              <strong>99%</strong>
              <span>довольных клиентов</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}