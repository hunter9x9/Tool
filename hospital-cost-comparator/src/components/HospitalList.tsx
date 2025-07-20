import React, { useEffect, useState } from 'react';
import { fetchHospitals } from '../api/cms';
import { Hospital } from '../types';

const HospitalList: React.FC = () => {
    const [hospitals, setHospitals] = useState<Hospital[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getHospitals = async () => {
            try {
                const data = await fetchHospitals();
                setHospitals(data);
            } catch (err) {
                setError('Failed to fetch hospitals');
            } finally {
                setLoading(false);
            }
        };

        getHospitals();
    }, []);

    if (loading) {
        return <div>Loading hospitals...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="hospital-list">
            <h2>Hospitals in California</h2>
            <ul>
                {hospitals.map(hospital => (
                    <li key={hospital.id}>
                        <h3>{hospital.name}</h3>
                        <p>{hospital.address}</p>
                        <p>Phone: {hospital.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HospitalList;