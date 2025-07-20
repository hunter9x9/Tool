import React from 'react';
import { Hospital } from '../types';
import './CheckupComparison.css';

interface CheckupComparisonProps {
    hospitals: Hospital[];
}

const CheckupComparison: React.FC<CheckupComparisonProps> = ({ hospitals }) => {
    return (
        <div className="checkup-comparison">
            <h2>Checkup Cost Comparison</h2>
            {hospitals.length === 0 ? (
                <p>No hospitals available for comparison.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Hospital Name</th>
                            <th>Checkup Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hospitals.map((hospital) => (
                            <tr key={hospital.id}>
                                <td>{hospital.name}</td>
                                <td>${hospital.checkupCost}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default CheckupComparison;