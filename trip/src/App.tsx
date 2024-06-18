import React, { useState, useEffect } from 'react';
import { TripList } from './components/TripList/TripList';
import { TripForm } from './components/TripForm/TripForm';
import { TripApi } from './api/TripApi';
import { Trip } from './types/trip';
import { EditTrip } from './components/EditTrip/EditTrip';

export const App = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);

  useEffect(() => {
    const fetchTrips = async () => {
      const data = await TripApi.getTrips();
      if(data) setTrips(data);
      else alert('Не удалось получить список')
    };

    fetchTrips();
  }, []);

  const addTrip = async (trip: Trip) => {
    const createdTrip = await TripApi.addTrip(trip);
    if (createdTrip) setTrips((prev) => [...prev, createdTrip]);
    else alert('Не удалось создать')
  };

  const updateTrip = async (trip: Trip) => {
    const updatedTrip = await TripApi.updateTrip(trip);
    if (updatedTrip) setTrips(trips.map(trip => (trip.id === updatedTrip.id ? updatedTrip : trip)));
    else alert('Не удалось обновить')
  };

  return (
    <div>
      <h1>Trip List</h1>
      <TripForm handleSubmit={addTrip} />
      <TripList trips={trips} setSelectedTrip={setSelectedTrip} />
      {selectedTrip && <EditTrip initialData={selectedTrip} onSubmit={updateTrip} />}
    </div>
  );
};
