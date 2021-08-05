import React from 'react';

const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit',
};
export default function TemperatureInput({ temperature, onTemperatureChange, scale }) {
    return (
        <fieldset>
            <legend>Enter temperature in {scaleName[scale]}:</legend>
            <input
                type="text"
                value={temperature}
                onChange={(e) => onTemperatureChange(e, scale)}
            />
        </fieldset>
    );
}
