import express from 'express';
import bodyParser from 'body-parser';
import { Trip } from './types/trip';
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

let trips: Trip[] = [];

app.get('/trip', (req, res) => {
    res.status(200).json(trips);
});

app.post('/trip', (req, res) => {
    const {firstName, lastName, phoneNumber, route}: Trip = req.body;

    const newTrip: Trip = {id: trips.length + 1, firstName, lastName, phoneNumber, route};
    trips.push(newTrip);

    res.status(201).json(newTrip);
});

app.patch('/trip/:tripId', (req,res) => {
    const tripId: number = parseInt(req.params.tripId);
    const {firstName, lastName, phoneNumber, route}: Trip = req.body;

    const tripIndex: number = trips.findIndex(trip => Number(trip.id) === Number(tripId));

    if (tripId === -1) {
        return res.status(404).json({ message: 'Trip not found' });
    }

    trips[tripIndex] = {
        ...trips[tripIndex],
        firstName: firstName || trips[tripIndex].firstName,
        lastName: lastName || trips[tripIndex].lastName,
        phoneNumber: phoneNumber || trips[tripIndex].phoneNumber,
        route: route || trips[tripIndex].route,
    };

    res.status(200).json(trips[tripIndex]);
});

app.listen(PORT, () => {
    console.log('Сервер запущен на порту 3001');
});
