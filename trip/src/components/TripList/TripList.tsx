import React from 'react';
import { Trip } from '../../types/trip';
import './list.css'

interface TripListProps {
    trips: Trip[];
    setSelectedTrip: (trip: Trip) => void 
}

export const TripList: React.FC<TripListProps> = ({ trips, setSelectedTrip }) => {
    const handleTripClick = (trip: Trip) => {
        setSelectedTrip(trip);
        console.log(trip)
    };
    return (
        <div>
            <ul>
                {trips.map((trip) => (
                    <li key={trip.id} className='trip-list' onClick={() => handleTripClick(trip)}>
                        <strong>{trip.firstName} {trip.lastName}</strong> {trip.phoneNumber} - {trip.route}
                    </li>
                ))}
            </ul>
        </div>
    );
};