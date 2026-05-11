import { useEffect, useRef, useState } from 'react'
import SectionCard from './SectionCard'
import { getShowRegistry } from '../utils/showRegistry'
import leave10 from '../assets/leaves/leave_10.png'

const timeline = [
  { time: '15:20', event: 'Начало церемонии в ЗАГСе', note: 'Лучше приехать немного заранее', registry: true },
  { time: '17:00', event: 'Сбор гостей' },
  { time: '17:30', event: 'Начало банкета' },
  { time: '23:00', event: 'Окончание банкета' },
]

function TimelineSection() {
  const [isVisible, setIsVisible] = useState(false)
  const timelineRef = useRef<HTMLOListElement | null>(null)
  const showRegistry = getShowRegistry()
  const visibleTimeline = timeline.filter((item) => showRegistry || !item.registry)

  useEffect(() => {
    const node = timelineRef.current

    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <SectionCard title="Тайминг дня">
      <img className="section-deco deco-timeline-bottom-right" src={leave10} alt="" aria-hidden="true" />
      <ol
        ref={timelineRef}
        className={`timeline timeline-layout${isVisible ? ' timeline-visible' : ''}`}
        aria-label="Расписание дня"
      >
        {visibleTimeline.map((item, index) => (
          <li
            key={item.time}
            className={`timeline-item timeline-row${item.note ? '' : ' timeline-row-no-note'}`}
            style={{ transitionDelay: `${index * 180}ms` }}
          >
            <div className="timeline-time-wrap">
              <p className="timeline-time">{item.time}</p>
              {index < visibleTimeline.length - 1 ? <span className="timeline-stem" aria-hidden="true" /> : null}
            </div>
            <div className="timeline-content">
              <p className="timeline-event">{item.event}</p>
              {item.note ? <p className="timeline-note">{item.note}</p> : null}
            </div>
          </li>
        ))}
      </ol>
    </SectionCard>
  )
}

export default TimelineSection
