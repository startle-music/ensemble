import React, { useState, useEffect } from 'react';

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
    color: ${({ theme }) => theme.main.color};
`;

export default function TimeSelect({
    label,
    name,
    hourMin = 0,
    hourMax = 23,
    hourValue,
    minuteMin = 0,
    minuteMax = 59,
    minuteValue
}) {
    const [hour, setHour] = useState(hourValue);
    const [minute, setMinute] = useState(minuteValue);

    useEffect(() => {
        setHour(hourValue);
        setMinute(minuteValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function calculateHours() {
        const hours = [];
        for (let i = hourMin; i <= hourMax; i++) {
            // pad the number with a leading zero if it is less than 10
            hours.push(i < 10 ? `0${i}` : i);
        }
        return hours;
    }

    function calculateMinutes() {
        const minutes = [];
        for (let i = minuteMin; i <= minuteMax; i++) {
            // / pad the number with a leading zero if it is less than 10
            minutes.push(i < 10 ? `0${i}` : i);
        }
        return minutes;
    }

    return (
        <TimseSelectStyled>
            <Label>{label}</Label>
            <TimeSelectInput>
                <SelectInputStyled value={hour} name={`${name}[hour]`} inline onChange={e => setHour(e.target.value)}>
                    {calculateHours().map(hour => (
                        <option key={hour} value={hour}>
                            {hour}
                        </option>
                    ))}
                </SelectInputStyled>
                <Divider>:</Divider>
                <SelectInputStyled
                    value={minute}
                    name={`${name}[minute]`}
                    inline
                    onChange={e => setMinute(e.target.value)}
                >
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
