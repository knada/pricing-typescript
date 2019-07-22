import React from 'react';
import styled from 'styled-components';

import PricingBox from '../PricingBox/PricingBox';

import PricingList from '../../data';

const Container = styled.div`
    background: white;
    margin: auto;
    max-width: 70em;
    text-align: center;
    border-radius: 0.75rem;
    overflow: hidden;
`;

const Heading = styled.h1`
    color: ${props => props.theme.colors.darkBlue};
    font-family: ${props => props.theme.fonts.Secondary};
    font-size: ${props => props.theme.fontSizes.bigHeading};
    margin: 2rem;
    font-weight: normal;
`;

const SubHeading = styled.p`
    color: ${props => props.theme.colors.subGrey};
    margin: 1rem;
`;

const PricingBoxesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 4rem 2rem;
`;

const PricingSubTextContainer = styled.div`
    background: #f7f7f7;
    padding: 3rem;
    text-align: center;
`;

const PricingSubText = styled.h3`
    color: ${props => props.theme.colors.darkBlue};
    font-family: ${props => props.theme.fonts.Secondary};
    font-size: 1.5rem;
    font-weight: normal;
`;

const PricingContainer: React.FC = () => {
    return (
        <Container>
            <Heading>Subscribing Plans</Heading>
            <SubHeading>Come to toast, is you and me, Let me tell you my history</SubHeading>
            <PricingBoxesContainer>
                {PricingList.map(pricing => (
                    <PricingBox
                        key={pricing.name}
                        name={pricing.name}
                        price={pricing.price}
                        priceSub={pricing.priceSub}
                        description={pricing.description}
                        recent={pricing.recent}
                        highlighted={pricing.highlighted}
                    />
                ))}
            </PricingBoxesContainer>
            <PricingSubTextContainer>
                <PricingSubText>Any Questions? Write Us!</PricingSubText>
            </PricingSubTextContainer>
        </Container>
    );
};

export default PricingContainer;
