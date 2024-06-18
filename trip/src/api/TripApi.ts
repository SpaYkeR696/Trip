import axios from 'axios';
import { Trip } from '../types/trip';

const apiUrl = 'http://localhost:3001/trip';

export const TripApi = {
    getTrips: async (): Promise<Trip[] | null> => {
        try {
            const response = await axios.get(apiUrl);
            return response.data;
        } catch (error) {
            return null;
        } 
    },

    addTrip: async (trip: Trip): Promise<Trip | null> => {
        try {
            const response = await axios.post(apiUrl, trip);
            return response.data;
        } catch (error) {
           return null;
        }
    },

    updateTrip: async (updateTrip: Trip): Promise<Trip | null> => {
        const { id, ...rest } = updateTrip;
        try {
            const response = await axios.patch(`${apiUrl}/${id}`, rest);
            return response.data;
        } catch (error) {
            return null;
        }
    }
};

