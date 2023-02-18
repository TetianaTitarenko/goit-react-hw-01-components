import PropTypes from 'prop-types';
import { Data } from 'components/data/data'
import css from "components/Statistics/Statistics.module.css"

export const Statistics = ({ items }) => {
    return <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>
        <ul className={css.statList} >
            {items.map(item => { return <Data key={item.id} item={item} /> })}
        </ul>
    </section>
};

Statistics.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired}) 
    ).isRequired
}