import React from 'react';
import { Box, UnorderedList, List } from '@chakra-ui/react';
import GoogleIcon from '../svg_components/GoogleIcon';
import HewlettIcon from '../svg_components/HewlettIcon';
import IBMIcon from '../svg_components/IBMIcon';
import MicrosoftIcon from '../svg_components/MicrosoftIcon';
import VectorGraphics from '../svg_components/VectorGraphics';

function BrandList() {
  return (
    <Box>
      <UnorderedList>
        <List>
          <GoogleIcon />
          <IBMIcon />
          <MicrosoftIcon />
          <HewlettIcon />
          <VectorGraphics />
        </List>
      </UnorderedList>
    </Box>
  );
}

export default BrandList;
