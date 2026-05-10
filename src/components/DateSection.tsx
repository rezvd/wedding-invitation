import SectionCard from "./SectionCard";
import heartImage from "../assets/heart_no_bg.png";

const weekdays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

const days = [
  { day: 27, faded: true },
  { day: 28, faded: true },
  { day: 29, faded: true },
  { day: 30, faded: true },
  { day: 31, faded: true },
  { day: 1, highlight: true },
  { day: 2 },
  { day: 3 },
  { day: 4 },
  { day: 5 },
  { day: 6 },
  { day: 7 },
  { day: 8 },
  { day: 9 },
];

function DateSection() {
  return (
    <SectionCard title="Дата" className="date-card">
      <p className="date-summary">
        Мы будем ждать вас уже этим летом — 1 августа 2026
      </p>

      <div className="calendar" aria-label="Календарь свадьбы">
        <div className="calendar-weekdays" aria-hidden="true">
          {weekdays.map((weekday) => (
            <span key={weekday} className="calendar-weekday">
              {weekday}
            </span>
          ))}
        </div>

        <div className="calendar-grid">
          {days.map((item) => (
            <div
              key={item.day}
              className={`calendar-day${item.faded ? " calendar-day-faded" : ""}${
                item.highlight ? " calendar-day-highlight" : ""
              }`}
            >
              {item.highlight ? (
                <span className="calendar-heart" aria-hidden="true">
                  <img
                    className="calendar-heart-image"
                    src={heartImage}
                    alt=""
                  />
                  <span className="calendar-heart-number">{item.day}</span>
                </span>
              ) : (
                <span className="calendar-day-number">{item.day}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}

export default DateSection;
