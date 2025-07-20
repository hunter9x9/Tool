import React from 'react';
import { Hospital } from '../types';
import { calculateTotalCost } from '../utils/costUtils';

interface ExpenseSummaryProps {
    hospitals: Hospital[];
}

const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({ hospitals }) => {
    return (
        <div className="expense-summary">
            <h2>Expense Summary</h2>
            <table>
                <thead>
                    <tr>
                        <th>Hospital Name</th>
                        <th>Total Expenses</th>
                    </tr>
                </thead>
                <tbody>
                    {hospitals.map(hospital => (
                        <tr key={hospital.id}>
                            <td>{hospital.name}</td>
                            <td>${calculateTotalCost(hospital)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseSummary;