import SectionCard from "./SectionCard";

const palette = [
  "#dbe8f0",
  "#dfe5f1",
  "#e9e1ef",
  "#dce8e4",
  "#d7e4dd",
  "#dce6d9",
  "#e6efe9",
  "#e8eadb",
  "#f3eab9",
  "#efd7d8",
  "#f6e4ea",
  "#f2ddd4",
  "#e8d7cf",
  "#f2e5db",
  "#efe6d7",
  "#f1e4cc",
  "#e9ddcc",
  "#e9dccb",
];

function DressCodeSection() {
  return (
    <SectionCard title="Дресс-код">
      <p className="body-copy centered">
        Мы подготовили палитру оттенков, которые особенно красиво впишутся в
        атмосферу нашего дня. Будем рады, если вы поддержите её в своих образах.
      </p>
      <p className="body-copy centered">
        Если будет возможность, просим по возможности избегать белого цвета (в
        мужских рубашках допустимо).
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
