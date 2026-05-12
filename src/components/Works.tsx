import { useState } from 'react'
import type { MouseEvent } from 'react'

import work1Before from '../assets/work1-before.png'
import work1After from '../assets/work1-after.png'

import work2Before from '../assets/work2-before.png'
import work2After from '../assets/work2-after.png'

import work3Before from '../assets/work3-before.png'
import work3After from '../assets/work3-after.png'

const works = [
  {
    before: work1Before,
    after: work1After,
    title: 'Замена слишком тугой резинки'
  },
  {
    before: work2Before,
    after: work2After,
    title: 'Укорачивание рукавов'
  },
  {
    before: work3Before,
    after: work3After,
    title: 'Устранение растяжек + резинка на пояс'
  }
]

type CompareCardProps = {
  before: string
  after: string
  title: string
}

function CompareCard({
  before,
  after,
  title
}: CompareCardProps) {
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (
    e: MouseEvent<HTMLDivElement>
  ) => {
    if (!isDragging) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left

    const percent = (x / rect.width) * 100

    setPosition(Math.max(0, Math.min(100, percent)))
  }

  return (
    <div className='compare-card'>
      <div
        className='compare-wrapper'
        onMouseMove={handleMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
      >
        {/* BEFORE */}
        <img
          src={before}
          className='compare-img'
          alt='до'
          draggable={false}
        />

        {/* AFTER */}
        <div
          className='compare-after'
          style={{ width: `${position}%` }}
        >
          <img
            src={after}
            className='compare-img'
            alt='после'
            draggable={false}
          />
        </div>

        {/* LINE */}
        <div
          className='compare-line'
          style={{ left: `${position}%` }}
        >
          <div className='compare-handle' />
        </div>
      </div>

      <h3>{title}</h3>
    </div>
  )
}

export default function Works() {
  return (
    <section id='works' className='section'>
      <div className='container'>
        <div className='section-title'>
          <h2>Наши работы</h2>
        </div>

        <div className='works-grid'>
          {works.map((work) => (
            <CompareCard
              key={work.title}
              before={work.before}
              after={work.after}
              title={work.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}