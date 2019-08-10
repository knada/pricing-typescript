import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import PricingContainer from './components/PricingContainer/PricingContainer';

import GlobalStyles from './GlobalStyles';
import theme from './theme';

const AppContainer = styled.div`
    background-color: ${props => props.theme.colors.background};
    min-height: 100vh;
    font-family: ${props => props.theme.fonts.Main};
    padding: 2%;
`;

const App: React.FC = () => {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <AppContainer>
                    <PricingContainer />
                </AppContainer>
            </ThemeProvider>
        </>
    );
};

export default App;
