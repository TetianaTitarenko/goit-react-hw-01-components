import { Transaction } from 'components/transaction/transaction';
import css from 'components/TransactionHistory/TransactionHistory.module.css'
import PropTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
return <table className={css}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
    </thead>
    <tbody>
    {items.map(item => {
        return <Transaction key={item.id} eachTransaction={item} />
    })}
    </tbody>
</table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired}) 
    ).isRequired
}