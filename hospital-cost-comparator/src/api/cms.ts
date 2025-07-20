import axios from 'axios';

const CMS_API_URL = 'https://api.cms.gov/hospitals'; // Replace with the actual CMS API URL

export const fetchHospitals = async () => {
    try {
        const response = await axios.get(`${CMS_API_URL}?state=CA`);
        return response.data;
    } catch (error) {
        console.error('Error fetching hospitals:', error);
        throw error;
    }
};

// Additional API functions can be added here as needed, such as fetching specific cost data.