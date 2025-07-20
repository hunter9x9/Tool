import React, { useEffect, useState } from 'react';
import { fetchHospitals } from './api/cms';
import HospitalList from './components/HospitalList';
import CostComparison from './components/CostComparison';
import SurgeryComparison from './components/SurgeryComparison';
import CheckupComparison from './components/CheckupComparison';
import ExpenseSummary from './components/ExpenseSummary';
import { Hospital } from './types';

const App: React.FC = () => {
    const [hospitals, setHospitals] = useState<Hospital[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadHospitals = async () => {
            try {
                const data = await fetchHospitals();
                setHospitals(data);
            } catch (error) {
                console.error("Error fetching hospitals:", error);
            } finally {
                setLoading(false);
            }
        };

        loadHospitals();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="app-container">
            <h1>Hospital Cost Comparator</h1>
            <HospitalList hospitals={hospitals} />
            <CostComparison hospitals={hospitals} />
            <SurgeryComparison hospitals={hospitals} />
            <CheckupComparison hospitals={hospitals} />
            <ExpenseSummary hospitals={hospitals} />
        </div>
    );
};

export default App;