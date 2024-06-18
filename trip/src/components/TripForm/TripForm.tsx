import React, { useState } from "react";
import './form.css'
import './button.css'
import { Trip } from '../../types/trip';

interface AddDriversPropsForm {
    handleSubmit: (trip: Trip) => void;
};

export const TripForm: React.FC<AddDriversPropsForm> = ({ handleSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [route, setRoute] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newTrip = {
            firstName,
            lastName,
            phoneNumber,
            route
        };

        handleSubmit(newTrip);
    };

    return (
        <form className="form" onSubmit={submit}>
            <input
                className="form__input"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                className="form__input"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                className="form__input"
                type="number"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
                className="form__input"
                type="text"
                placeholder="Route"
                value={route}
                onChange={(e) => setRoute(e.target.value)}
            />
            <button className="button" type="submit">Add Trip</button>
        </form>
    )
}