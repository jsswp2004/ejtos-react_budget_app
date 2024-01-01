import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    const remainingBudget = budget - totalExpenses;
    const alertType = remainingBudget < 0 ? 'alert-danger' : 'alert-success';

    return (
        <div>
            {/* Display the remaining budget */}
            <div className={`alert ${alertType}`}>
                <span>Remaining: £{remainingBudget}</span>
            </div>

            {/* Display warning if expenses exceed the budget */}
            {remainingBudget < 0 && (
                <div className="alert alert-warning">
                    The value cannot exceed remaining funds! {remainingBudget}
                </div>
            )}
        </div>
    );
};

export default Remaining;
