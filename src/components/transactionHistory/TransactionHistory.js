import React from 'react';
import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => (
    <table className={styles.transaction__history}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {transactions.map(({ id, type, amount, currency }) => (
                <TransactionHistoryItem
                    key={id}
                    type={type}
                    amount={amount}
                    currency={currency}
                />
            ))}
        </tbody>
    </table>
);

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    ),
};

export default TransactionHistory;
