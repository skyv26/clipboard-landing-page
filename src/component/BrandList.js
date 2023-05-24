import React from 'react';
import { Box, UnorderedList, ListItem } from '@chakra-ui/react';
import GoogleIcon from '../svg_components/GoogleIcon';
import HewlettIcon from '../svg_components/HewlettIcon';
import IBMIcon from '../svg_components/IBMIcon';
import MicrosoftIcon from '../svg_components/MicrosoftIcon';
import VectorGraphics from '../svg_components/VectorGraphics';

function BrandList() {
  return (
    <Box as="section" padding={['16px']} pt={['120px']}>
      <UnorderedList
        width={['full']}
        margin={['auto']}
        listStyleType={['none']}
        display={['flex']}
        flexDirection={['column']}
        alignItems={['center']}
        gap={['56px']}
      >
        <ListItem>
          <GoogleIcon w={['139px']} h={['41px']} />
        </ListItem>
        <ListItem>
          <IBMIcon w={['121px']} h={['60px']} />
        </ListItem>
        <ListItem>
          <MicrosoftIcon w={['135px']} h={['40px']} />
        </ListItem>
        <ListItem>
          <HewlettIcon w={['113px']} h={['47px']} />
        </ListItem>
        <ListItem>
          <VectorGraphics w={['105px']} h={['25px']} />
        </ListItem>
      </UnorderedList>
    </Box>
  );
}

export default BrandList;
