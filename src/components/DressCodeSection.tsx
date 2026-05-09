import SectionCard from "./SectionCard";

const palette = [
  "#D5E5DF",
  "#C8DAED",
  "#8FAF85",
  "#6B8F6B",
  "#F5EDE3",
  "#F2D9DC",
  "#E8C4C4",
  "#C4A097",
  "#B89080",
  "#9E7B6B",
  "#7A5545",
  "#3D1A10",
];

function DressCodeSection() {
  return (
    <SectionCard title="Дресс-код">
      <p className="body-copy centered">
        Мы подготовили палитру оттенков, которые особенно красиво впишутся в
        атмосферу нашего дня. Будем рады, если вы поддержите её в своих образах.
      </p>
      <p className="body-copy centered">
        Если будет возможность, просим избегать белого цвета (в мужских рубашках
        допустимо).
      </p>

      <div className="palette" aria-label="Пастельная палитра">
        {palette.map((color) => (
          <span
            key={color}
            className="swatch"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </SectionCard>
  );
}

export default DressCodeSection;
