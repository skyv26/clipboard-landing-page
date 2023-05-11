import React from 'react';
import { Box } from '@chakra-ui/react';
import HeroSection from './component/HeroSection';
import FeatureSection from './component/FeatureSection';

const App = () => {
    return (
        <Box as="main">
            <HeroSection />
            <FeatureSection />
        </Box>
    );
};

export default App;
