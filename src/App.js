import React from 'react';
import { Box } from '@chakra-ui/react';
import HeroSection from './component/HeroSection';
import FeatureSection from './component/FeatureSection';
import AccessSection from './component/AccessSection';
import WorkflowSection from './component/WorkflowSection';
import BrandList from './component/BrandList';
import CTASection from './component/CTASection';

const App = () => {
    return (
        <>
        <HeroSection />
        <Box as="main">
            <FeatureSection />
            <AccessSection />
            <WorkflowSection />
            <BrandList />
            <CTASection />
        </Box>
        </>
    );
};

export default App;
