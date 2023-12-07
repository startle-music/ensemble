import React, { Component } from 'react';
import styled from 'styled-components';
import Label from '../labels';

const pad = (n, width, z) => {
    z = z || '0';
    n += '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

const Wrap = styled.div`
    display: flex;
`;

const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const FieldWrap = styled.div`
    display: flex;
    position: relative;
    max-width: 26rem;
    margin: 0 0.325rem 0 0;
    align-items: center;
    span {
        color: #000;
        padding: 0.25em;
    }
    input {
        //border: 1px solid #ccc;
        border-radius: ${props => props.theme.main.borderRadius};
        font-size: 1rem;
        padding: 0.875rem 0.6rem;
        width: 100%;
    }

    & > .styled-select {
        display: flex;
        color: #000;
        align-items: center;
        margin: 0;
        width: 6em;
    }
`;

class TimeSelectInput extends Component {
    constructor(props) {
        super(props);
        this.renderMinutes = this.renderMinutes.bind(this);
        this.renderHours = this.renderHours.bind(this);
        this.state = {
            hours: '00',
            minutes: '00',
            date: ''
        };
    }

    componentDidMount() {
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        let dd = tomorrow.getDate();
        let mm = tomorrow.getMonth() + 1; // January is 0!
        const yyyy = tomorrow.getFullYear();
        if (dd < 10) {
            dd = `0${dd}`;
        }
        if (mm < 10) {
            mm = `0${mm}`;
        }

        tomorrow = `${yyyy}-${mm}-${dd}`;
        document.getElementById('datepicker').setAttribute('min', tomorrow);
    }

    componentWillMount() {
        const { value } = this.props;
        if (value !== 'Never') {
            const time = value.substr(value.indexOf(' ') + 1).split(':');
            this.setState({
                hours: time[0],
                minutes: time[1],
                date: value.substr(0, value.indexOf(' '))
            });
        }
    }

    renderMinutes() {
        const { name } = this.props;
        const { minutes } = this.state;
        return (
            <select
                name={`${name}-minutes`}
                value={minutes}
                onChange={e => {
                    this.changeMinutes(e);
                }}
            >
                {[...Array(60).keys()].map(x => (
                    <option value={pad(x, 2)}>{pad(x, 2)}</option>
                ))}
            </select>
        );
    }

    renderHours() {
        const { name } = this.props;
        const { hours } = this.state;
        return (
            <select
                name={`${name}-hours`}
                value={hours}
                onChange={e => {
                    this.changeHours(e);
                }}
            >
                {[...Array(24).keys()].map(x => (
                    <option value={pad(x, 2)}>{pad(x, 2)}</option>
                ))}
            </select>
        );
    }

    changeHours(e) {
        const { minutes, date } = this.state;
        this.setState({
            hours: e.target.value,
            minutes,
            date
        });
    }

    changeMinutes(e) {
        const { hours, date } = this.state;
        this.setState({
            hours,
            minutes: e.target.value,
            date
        });
    }

    changeDate(e) {
        const { hours, minutes } = this.state;
        this.setState({
            hours,
            minutes,
            date: e.target.value
        });
    }

    render() {
        const { name, id, label, inline = false } = this.props;
        const { date } = this.state;
        return (
            <Wrap inline={inline} id={id}>
                <InputWrap>
                    <Label>{label}</Label>
                    <FieldWrap>
                        <input
                            id="datepicker"
                            name={name}
                            type="date"
                            value={date}
                            onChange={e => {
                                this.changeDate(e);
                            }}
                        />
                        <span>at</span>
                        <div id="hourpicker" className="styled-select">
                            {this.renderHours()}
                        </div>
                        <span>:</span>
                        <div id="minutepicker" className="styled-select">
                            {this.renderMinutes()}
                        </div>
                    </FieldWrap>
                </InputWrap>
            </Wrap>
        );
    }
}

export default TimeSelectInput;
