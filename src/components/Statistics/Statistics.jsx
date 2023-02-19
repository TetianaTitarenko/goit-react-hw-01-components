import PropTypes from 'prop-types';
import { Data } from 'components/data/data'
import css from "components/Statistics/Statistics.module.css"

export const Statistics = ({ allData, title }) => {
    return <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
        <ul className={css.statList} >
            {allData.map(objectData => { 
                return <Data key={objectData.id} objectData={objectData} /> })}
        </ul>
    </section>
};

Statistics.propTypes = {
    allData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired}) 
    ).isRequired
}