import React from 'react';
import { Hospital } from '../types';
import { calculateSurgeryCost } from '../utils/costUtils';

interface SurgeryComparisonProps {
    hospitals: Hospital[];
}

const SurgeryComparison: React.FC<SurgeryComparisonProps> = ({ hospitals }) => {
    return (
        <div className="surgery-comparison">
            <h2>Surgery Cost Comparison</h2>
            {hospitals.length === 0 ? (
                <p>No hospital data available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Hospital Name</th>
                            <th>Surgery Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hospitals.map((hospital) => (
                            <tr key={hospital.id}>
                                <td>{hospital.name}</td>
                                <td>${calculateSurgeryCost(hospital)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default SurgeryComparison;