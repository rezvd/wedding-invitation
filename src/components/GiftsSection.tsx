import SectionCard from "./SectionCard";
import leave9 from "../assets/leaves/leave_9.png";

function GiftsSection() {
  return (
    <SectionCard title="Подарки">
      <img className="section-deco deco-gifts-top-right" src={leave9} alt="" aria-hidden="true" />
      <p className="body-copy centered">
        Самый ценный подарок для нас — ваше присутствие и тёплые эмоции этого
        дня.
      </p>
      <p className="body-copy centered">
        Если вам захочется поддержать нашу новую семью, мы будем очень
        благодарны за вклад в её начало в удобном для вас формате.
      </p>
      <p className="body-copy centered">
        А если захочется дополнить подарок небольшим знаком внимания, вместо
        цветов будем рады лотерейному билету.
      </p>
    </SectionCard>
  );
}

export default GiftsSection;
