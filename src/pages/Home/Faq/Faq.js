import React from 'react';
import { Box, Typography } from '@mui/material';
import CreativeAccordion from '../../../components/custom/CreativeAccordion/CreativeAccordion';

const Faq = () => {
   return (
      <Box
         sx={{
            my: 11,
         }}
      >
         <Typography variant='h4' fontWeight={600} textAlign='center' mb={3}>
            Frequently Asked Questions
         </Typography>

         <Box
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               flexDirection: 'column',
               gap: '1rem',
               mt: 5,
            }}
         >
            <CreativeAccordion
               title='How do I pay for the Essentials or Premium plan?'
               description='You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.'
            />
            <CreativeAccordion
               title='Can I cancel my Essentials or Premium plan subscription at any time?'
               description='You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.'
            />
            <CreativeAccordion
               title='How do I pay for the Essentials or Premium plan?'
               description='You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.'
            />
         </Box>
      </Box>
   );
};

export default Faq;
