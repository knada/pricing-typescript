import React from 'react';
import styled from 'styled-components';

interface PricingBoxProps {
    name: string;
    price: string;
    priceSub: string;
    description: string[];
    recent?: boolean;
    highlighted?: boolean;
}

interface modifiers {
    highlighted?: boolean;
}

const Container = styled.div<modifiers>`
    position: relative;
    width: 20em;
    margin: 1rem;
    border-radius: 0.5em;
    background: ${props =>
        props.highlighted ? props.theme.colors.highlightedBox : props.theme.colors.basicBox};
    color: ${props =>
        props.highlighted ? props.theme.colors.highlightedText : props.theme.colors.basicText};
    transform: ${props => props.highlighted && 'scale(1.1,1.1)'};
`;

const PricingNewTag = styled.div`
    position: absolute;
    right: 0;
    top: 1em;
    background: #fefec2;
    color: #add7e7;
    font-weight: bold;
    padding: 0.3em 0.7em;
    border-radius: 50em 0 0 50em;
    text-transform: uppercase;
`;

const PriceName = styled.h2`
    font-family: ${props => props.theme.fonts.Secondary};
    font-size: ${props => props.theme.fontSizes.boxHeading};
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
    font-weight: normal;
    margin: 2rem;
`;

const PriceDiv = styled.div`
    margin: 2rem;
`;

const Price = styled.h3`
    font-size: ${props => props.theme.fontSizes.boxPrice};
    text-transform: uppercase;
`;

const PriceSub = styled.p`
    text-transform: uppercase;
    font-size: ${props => props.theme.fontSizes.boxPriceSub};
`;

const DescriptionList = styled.ul`
    list-style: none;
    margin: 1.4rem;
`;

const Description = styled.li``;

const PricingButton = styled.button<modifiers>`
    width: 12.5em;
    padding: 0.5em;
    margin: 2rem;
    background: ${props =>
        props.highlighted ? props.theme.colors.highlightedText : props.theme.colors.basicText};
    color: ${props =>
        props.highlighted ? props.theme.colors.highlightedBox : props.theme.colors.basicBox};
    box-shadow: ${props => props.highlighted && props.theme.boxShadow};
    border: none;
    font-family: ${props => props.theme.fonts.Secondary};
    font-size: ${props => props.theme.fontSizes.boxButton};
    text-transform: uppercase;
    border-radius: 99px;
    cursor: pointer;
`;

const PricingBox: React.FC<PricingBoxProps> = ({
    name,
    price,
    priceSub,
    description,
    recent,
    highlighted,
}) => {
    return (
        <Container highlighted={highlighted}>
            {recent && <PricingNewTag>New</PricingNewTag>}
            <PriceName>{name}</PriceName>
            <PriceDiv>
                <Price>{price}</Price>
                <PriceSub>{priceSub ? priceSub : <br />}</PriceSub>
            </PriceDiv>
            <DescriptionList>
                {description.map(item => (
                    <Description key={item}>{item}</Description>
                ))}
            </DescriptionList>
            <PricingButton highlighted={highlighted}>Get It</PricingButton>
        </Container>
    );
};

export default PricingBox;
