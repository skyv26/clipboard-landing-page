import React from 'react'
import { UnorderedList, List } from '@chakra-ui/react';
import GoogleIcon from '../svg_components/GoogleIcon';
import HewlettIcon from '../svg_components/HewlettIcon';
import IBMIcon from '../svg_components/IBMIcon';
import MicrosoftIcon from '../svg_components/MicrosoftIcon';
import VectorGraphics from '../svg_components/VectorGraphics';

const BrandList = () => {
  return (
    <UnorderedList>
      <List>
        <GoogleIcon />
        <IBMIcon />
        <MicrosoftIcon />
        <HewlettIcon />
        <VectorGraphics />
      </List>
    </UnorderedList>
  );
};

export default BrandList;
