import SectionCard from "./SectionCard";

function GiftsSection() {
  return (
    <SectionCard title="Подарки">
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
