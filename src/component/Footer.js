import React from 'react';
import {
  Flex, Grid, GridItem, Link, HStack,
} from '@chakra-ui/react';
import Logo from '../svg_components/Logo';
import FbIcon from '../svg_components/FbIcon';
import InstaIcon from '../svg_components/InstaIcon';
import TwitterIcon from '../svg_components/TwitterIcon';

function Footer() {
  return (
    <Flex
      as="footer"
      flexDirection={['column']}
      padding={['16px']}
      py={['56px']}
      fontWeight={[400]}
      alignItems={['center']}
      color="primary.900"
      bgColor={['hsla(180, 11%, 96%, 1)']}
      gap={['40px']}
    >
      <Logo w={['40px', '55px']} h={['40px', '55px']} />
      <Grid textAlign={['center']} rowGap={['16px']}>
        <GridItem>
          <Link href="." w={['160px']} h={['30px']} color={['hsla(210, 10%, 33%, 1)']} fontSize={['14px']}>FAQs</Link>
        </GridItem>
        <GridItem>
          <Link href="." w={['160px']} h={['30px']} color={['hsla(210, 10%, 33%, 1)']} fontSize={['14px']}>Contact Us</Link>
        </GridItem>
        <GridItem>
          <Link href="." w={['160px']} h={['30px']} color={['hsla(210, 10%, 33%, 1)']} fontSize={['14px']}>Privacy Policy</Link>
        </GridItem>
        <GridItem>
          <Link href="." w={['160px']} h={['30px']} color={['hsla(210, 10%, 33%, 1)']} fontSize={['14px']}>Press Kit</Link>
        </GridItem>
        <GridItem>
          <Link href="." w={['160px']} h={['30px']} color={['hsla(210, 10%, 33%, 1)']} fontSize={['14px']}>Install Guide</Link>
        </GridItem>
      </Grid>
      <HStack gap={['40px']} mt={['16px']}>
        <Link href=".">
          <FbIcon w={['24px']} h={['24px']} color={['hsla(210, 10%, 33%, 1)']} />
        </Link>
        <Link href=".">
          <TwitterIcon w={['24px']} h={['19.5px']} color={['hsla(210, 10%, 33%, 1)']} />
        </Link>
        <Link href=".">
          <InstaIcon w={['24px']} h={['24px']} color={['hsla(210, 10%, 33%, 1)']} />
        </Link>
      </HStack>
    </Flex>
  );
}

export default Footer;
