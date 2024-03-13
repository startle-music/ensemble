import React from 'react';

import styled from 'styled-components';

import SelectInput from './select';
import Label from './label';

const TimseSelectStyled = styled.div``;

const TimeSelectInput = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`;

const Divider = styled.div`
    margin: 0 0.5rem;
`;

export default function TimeSelect({
    label,
    hourMin = 0,
    hourMax = 23,
    hourValue,
    minuteMin = 0,
    minuteMax = 59,
    minuteValue
}) {
    function calculateHours() {
        const hours = [];
        for (let i = hourMin; i <= hourMax; i++) {
            hours.push(i);
        }
        return hours;
    }

    function calculateMinutes() {
        const minutes = [];
        for (let i = minuteMin; i <= minuteMax; i++) {
            minutes.push(i);
        }
        return minutes;
    }

    return (
        <TimseSelectStyled>
            <Label>{label}</Label>
            <TimeSelectInput>
                <SelectInput value={hourValue}>
                    {calculateHours().map(hour => (
                        <option key={hour} value={hour}>
                            {hour}
                        </option>
                    ))}
                </SelectInput>
                <Divider>:</Divider>
                <SelectInput value={minuteValue}>
                    {calculateMinutes().map(minute => (
                        <option key={minute} value={minute}>
                            {minute}
                        </option>
                    ))}
                </SelectInput>
            </TimeSelectInput>
        </TimseSelectStyled>
    );
}
