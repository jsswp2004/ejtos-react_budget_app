import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [error, setError] = useState('');

    // Calculate total expenses
    const totalExpenses = expenses.reduce((total, expense) => total + expense.cost, 0);
    const remainingBudget = budget - totalExpenses; // Calculate the remaining budget
    useEffect(() => {
        if (error) {
            window.alert(error);
            setError(''); // Reset error after displaying alert
        }
    }, [error]);

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (value === '' || isNaN(value)) {
            setError('Please enter a valid number');
        } else if (value > 20000) {
            setError('Budget cannot exceed £20,000');
        } else if (value < totalExpenses) {
            setError('Budget cannot be lower than the total spent');
        } else if (value > remainingBudget) {
            setError('New budget exceeds the remaining budget');
        } else {
            setNewBudget(value);
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
<<<<<<< HEAD
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
=======

            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            />
>>>>>>> 07d77bcd9b99f292d26ed3fe472a27cae88cc488
        </div>
    );
};

export default Budget;
