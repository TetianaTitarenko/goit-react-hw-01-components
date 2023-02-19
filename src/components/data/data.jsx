import css from "components/data/data.module.css"
import PropTypes from 'prop-types';

export const Data = ({objectData: {label, percentage}}) => {
    return <li  className={css.item}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage} %</span>
            </li>
};

Data.propTypes = {
    objectData: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired,
};