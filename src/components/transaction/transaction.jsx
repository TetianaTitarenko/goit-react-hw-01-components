// import css from 'components/transaction/transaction.module.css'
// import PropTypes from 'prop-types';

export const Transaction = ({eachTransaction: {type,amount,currency}}) => {
    return <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
}