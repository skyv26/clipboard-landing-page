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
          <Link>FAQs</Link>
        </GridItem>
        <GridItem>
          <Link>Contact Us</Link>
        </GridItem>
        <GridItem>
          <Link>Privacy Policy</Link>
        </GridItem>
        <GridItem>
          <Link>Press Kit</Link>
        </GridItem>
        <GridItem>
          <Link>Install Guide</Link>
        </GridItem>
      </Grid>
      <HStack>
        <Link>
          <FbIcon />
        </Link>
        <Link>
          <InstaIcon />
        </Link>
        <Link>
          <TwitterIcon />
        </Link>
      </HStack>
    </Box>
  );
}

export default Footer;
