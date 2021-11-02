import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
    return (
      <section className={s.statistics}>

        {title &&
        <h2 className={s.title}>{title}</h2>
        }

        <ul className={s.stat_list}>

          {stats.map((stat) => (
            <li className={s.item} key={stat.id}>
            <p className={s.label}>{stat.label}</p>
            <p className="percentage">{stat.percentage}</p>
            </li>
        ))}
       
        </ul>

      </section>
    )
}


Statistics.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;