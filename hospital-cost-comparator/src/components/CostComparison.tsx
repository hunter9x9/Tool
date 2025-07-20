import React from 'react';

interface Hospital {
    id: number;
    name: string;
    healthcareCost: number;
    surgeryCost: number;
    checkupCost: number;
}

interface CostComparisonProps {
    hospitals: Hospital[];
}

const CostComparison: React.FC<CostComparisonProps> = ({ hospitals }) => {
    return (
        <div className="cost-comparison">
            <h2>Healthcare Cost Comparison</h2>
            <table>
                <thead>
                    <tr>
                        <th>Hospital Name</th>
                        <th>Healthcare Cost</th>
                        <th>Surgery Cost</th>
                        <th>Checkup Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {hospitals.map(hospital => (
                        <tr key={hospital.id}>
                            <td>{hospital.name}</td>
                            <td>${hospital.healthcareCost.toFixed(2)}</td>
                            <td>${hospital.surgeryCost.toFixed(2)}</td>
                            <td>${hospital.checkupCost.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CostComparison;