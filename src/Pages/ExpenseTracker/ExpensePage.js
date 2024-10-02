import React, { useState } from 'react';
import './ExpensePage.css';

const ExpensePage = () => {
    const [transactions, setTransactions] = useState([])
    const [title, setTitle] = useState("");
    const [amt, setamt] = useState("");
    const [balance, setbalance] = useState(500);

    function onChangeHandleritem(e) {
        setTitle(e.target.value);
    }
    function onChangeHandler(e) {
        setamt(e.target.value);
    }

    function transactionsInItem() {
        setTransactions([...transactions, { title: title, amt: amt, type: 'in' }]);

        setbalance(balance + parseInt(amt));
        setTitle("");
        setamt("");
    }

    function transactionsOutItem() {
        setTransactions([...transactions, { title: title, amt: amt, type: 'out' }]);

        setbalance(balance - parseInt(amt));
        setTitle("");
        setamt("");
    }
    return (
        <div className='header'>
            <div className='expense-header'>
                <div className='title-container'>
                    <input type='text' placeholder='Title' value={title} onChange={onChangeHandleritem} />
                    <button onClick={transactionsInItem}>In</button>
                </div>
                <div className='amt-container'>
                    <input type='number' placeholder='Amount' value={amt} onChange={onChangeHandler} />
                    <button onClick={transactionsOutItem}>Out</button>
                </div>
            </div>
            <div className='transaction-details'>
                {transactions.map((transactionsItem, index) => {
                    return (<div key={index} className={`balance-type`}>
                        <span>{transactionsItem.title}</span>
                        <span>{transactionsItem.amt}</span>
                    </div>);
                })}
            </div>
            <div className='balance-container'>
                <div className='balance'>${balance}</div>
            </div>
        </div>

    )
}

export default ExpensePage;
