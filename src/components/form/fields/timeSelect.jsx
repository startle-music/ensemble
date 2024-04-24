import React from 'react';

import styled from 'styled-components';

import SelectInput from './select';
import Label from './label';

const TimseSelectStyled = styled.div`
    width: 100%;
`;

const TimeSelectInput = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    //width: 100%;
`;

const SelectInputStyled = styled(SelectInput)``;

const Divider = styled.div`
    margin: 0 0.5rem;
`;

export default function TimeSelect({
    label,
    name,
    hourMin = 0,
    hourMax = 23,
    hourValue,
    minuteMin = 0,
    minuteMax = 59,
    minuteValue,
    hourChange = () => {},
    minuteChange = () => {}
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
                <SelectInputStyled value={hourValue} name={`${name}['hour']`} inline onChange={hourChange}>
                    {calculateHours().map(hour => (
                        <option key={hour} value={hour}>
                            {hour}
                        </option>
                    ))}
                </SelectInputStyled>
                <Divider>:</Divider>
                <SelectInputStyled value={minuteValue} name={`${name}['minute']`} inline onChange={minuteChange}>
                    {calculateMinutes().map(minute => (
                        <option key={minute} value={minute}>
                            {minute}
                        </option>
                    ))}
                </SelectInputStyled>
            </TimeSelectInput>
        </TimseSelectStyled>
    );
}
