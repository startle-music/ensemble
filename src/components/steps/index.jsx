import React from 'react';
import styled from 'styled-components';

import CircularProgress from '../circularProgress';
import Text from '../text';
import Heading from '../headings';
import Button from '../button';

const StyledSteps = styled.div``;

export const StepsHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    & h4 {
        margin: 0;
    }
`;

export const StepsFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    border-top: 1px solid ${props => props.theme.main.border};
    padding-top: ${props => props.theme.layout.padding.vertical.lg};
`;

const HeaderBody = styled.div``;

export const Step = styled.div``;

export default function Steps({ children, position = 0, handleNext, handleBack, handleEnd, endText = 'Submit' }) {
    let stepPosition = position;
    // lock position between 0 and children.length
    if (position < 0) {
        stepPosition = 0;
    } else if (position > React.Children.count(children) - 1) {
        stepPosition = React.Children.count(children) - 1;
    }

    // only show step at index
    return (
        <StyledSteps>
            <StepsHeader>
                <CircularProgress
                    progress={stepPosition + 1}
                    max={React.Children.count(children)}
                    size={50}
                    strokeWidth={8}
                />
                <HeaderBody>
                    <Text>
                        Step {stepPosition + 1} of {React.Children.count(children)}
                    </Text>
                    {React.Children.map(children, (child, i) => {
                        if (i === stepPosition) {
                            return <Heading>{child.props.title}</Heading>;
                        }
                        return null;
                    })}
                </HeaderBody>
            </StepsHeader>
            {React.Children.map(children, (child, i) => {
                if (i === stepPosition) {
                    return child;
                }
                return null;
            })}
            <StepsFooter>
                <Button onClick={handleBack} disabled={stepPosition === 0} neutral>
                    Previous
                </Button>
                {// if last step show submit button
                stepPosition === React.Children.count(children) - 1 ? (
                    <Button onClick={handleEnd}>{endText}</Button>
                ) : (
                    <Button onClick={handleNext} disabled={stepPosition === React.Children.count(children) - 1}>
                        Next Step
                    </Button>
                )}
            </StepsFooter>
        </StyledSteps>
    );
}
