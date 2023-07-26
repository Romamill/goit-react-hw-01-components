


const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map((item) => (
          <li key={item.id} className="item" style={{ backgroundColor: getRandomColor() }}>
            <span className="label">{item.label}</span>
            <span className="percentage">{`${item.percentage}%`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

