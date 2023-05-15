import React from 'react';
import {
  Box, Grid, GridItem, Link, HStack,
} from '@chakra-ui/react';
import Logo from '../svg_components/Logo';
import FbIcon from '../svg_components/FbIcon';
import InstaIcon from '../svg_components/InstaIcon';
import TwitterIcon from '../svg_components/TwitterIcon';

function Footer() {
  return (
    <Box as="footer">
      <Logo />
      <Grid>
        <GridItem>
          <Link href=".">FAQs</Link>
        </GridItem>
        <GridItem>
          <Link href=".">Contact Us</Link>
        </GridItem>
        <GridItem>
          <Link href=".">Privacy Policy</Link>
        </GridItem>
        <GridItem>
          <Link href=".">Press Kit</Link>
        </GridItem>
        <GridItem>
          <Link href=".">Install Guide</Link>
        </GridItem>
      </Grid>
      <HStack>
        <Link href=".">
          <FbIcon />
        </Link>
        <Link href=".">
          <InstaIcon />
        </Link>
        <Link href=".">
          <TwitterIcon />
        </Link>
      </HStack>
    </Box>
  );
}

export default Footer;
