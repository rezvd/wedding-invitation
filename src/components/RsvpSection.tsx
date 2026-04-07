import SectionCard from './SectionCard'

function RsvpSection() {
  return (
    <SectionCard title="Подтвердите ваше присутствие">
      <p className="body-copy centered">
        Нам будет очень приятно видеть вас среди гостей нашего праздника.
        Пожалуйста, сообщите о своём решении до{" "}
        <strong className="highlight-date">1 июля</strong>.
      </p>
      <p className="body-copy centered">
        Для подтверждения участия и получения актуальной информации,
        пожалуйста, присоединитесь к чату гостей во ВКонтакте по ссылке ниже.
      </p>
      <a className="btn" href="#" aria-label="Подтвердить и вступить в чат">
        Подтвердить и вступить в чат
      </a>
    </SectionCard>
  )
}

export default RsvpSection
