import React from 'react';
import { Box } from '@chakra-ui/react';
import HeroSection from './component/HeroSection';
import FeatureSection from './component/FeatureSection';
import AccessSection from './component/AccessSection';
import WorkflowSection from './component/WorkflowSection';
import BrandList from './component/BrandList';

const App = () => {
    return (
        <Box as="main">
            <HeroSection />
            <FeatureSection />
            <AccessSection />
            <WorkflowSection />
            <BrandList />
        </Box>
    );
};

export default App;
