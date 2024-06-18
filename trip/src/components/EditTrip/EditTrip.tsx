import React, { useEffect, useState } from 'react';
import { Trip } from '../../types/trip';

interface EditTripProps {
    initialData: Trip;
    onSubmit: (data: Trip) => void
}

export const EditTrip: React.FC<EditTripProps> = ({ onSubmit, initialData }) => {
    const [ tripData, setTripData ] = useState(initialData);

    useEffect(() => {
        setTripData(initialData)
    }, [initialData]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTripData({
            ...tripData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        onSubmit(tripData);
    };

    return (
        <div>
            <input type="text" name="firstName" value={tripData.firstName} onChange={handleChange} />
            <input type="text" name="lastName" value={tripData.lastName} onChange={handleChange} />
            <input type="text" name="phoneNumber" value={tripData.phoneNumber} onChange={handleChange} />
            <input type="text" name="route" value={tripData.route} onChange={handleChange} />
            <button onClick={handleSubmit}>Save Changes</button>
        </div>
    );
};