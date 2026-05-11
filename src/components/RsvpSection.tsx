import SectionCard from "./SectionCard";
import { getShowRegistry } from "../utils/showRegistry";

function RsvpSection() {
  const showRegistry = getShowRegistry();
  const chatUrl = showRegistry
    ? "https://vk.me/join/TuinhCOSOCWIC5eddQuuoed54UOCe4afTY4="
    : "https://vk.me/join/Ms6u4VV8CriDAxEAdvi6cUc87kyG9w2P1LQ=";

  return (
    <SectionCard title="Подтвердите ваше присутствие" className="rsvp-card">
      <p className="body-copy centered">
        Нам будет очень приятно видеть вас среди гостей нашего праздника.
        Пожалуйста, сообщите о своём решении до{" "}
        <strong className="highlight-date">1 июля</strong>.
      </p>
      <p className="body-copy centered">
        Для подтверждения участия и получения актуальной информации, пожалуйста,
        присоединитесь к чату гостей во ВКонтакте по ссылке ниже.
      </p>
      <a
        className="btn rsvp-btn"
        href={chatUrl}
        aria-label="Подтвердить и вступить в чат"
        target="_blank"
        rel="noreferrer"
      >
        Подтвердить и вступить в чат
      </a>
    </SectionCard>
  );
}

export default RsvpSection;
