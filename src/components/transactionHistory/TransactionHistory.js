import React from 'react';
import TransactionHistoryItem from './TransactionHistoryItem';

const TransactionHistory = ({ transactions }) => (
    <table class="transaction-history">
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

export default TransactionHistory;