import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import React from 'react';
import { Box, Typography } from '@mui/material';

const CustomExpandIcon = () => {
   return (
      <Box
         sx={
            {
               // '.Mui-expanded & > .collapseIconWrapper': {
               //    display: 'none',
               // },
               // '.expandIconWrapper': {
               //    display: 'none',
               // },
               // '.Mui-expanded & > .expandIconWrapper': {
               //    display: 'block',
               // },
               // '.Mui-expanded > collapseIconWrapper': {
               //    display: 'block',
               // },
               // '.Mui-expanded > expandIconWrapper': {
               //    display: 'none',
               // },
            }
         }
      >
         <div className='expandIconWrapper'>
            <RemoveIcon />
         </div>
         <div className='collapseIconWrapper'>
            <AddIcon />
         </div>
      </Box>
   );
};

const CreativeAccordion = ({ title, description, sx, ...rest }) => {
   return (
      <Accordion
         sx={{
            border: '1px solid #E5EAF4',
            boxShadow: 'none',
            width: '100%',
            maxWidth: '800px',
            p: 2,
            '& .Mui-expanded': {
               '& .expandIconWrapper': {
                  display: 'block',
               },
               '& .collapseIconWrapper': {
                  display: 'none',
               },
            },
         }}
      >
         <AccordionSummary
            expandIcon={<CustomExpandIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
            sx={{
               '& .expandIconWrapper': {
                  display: 'none',
               },

               '& p': {
                  fontWeight: 600,
                  color: 'primary.main',
                  fontSize: '1.2rem',
               },
               '& svg': {
                  fontSize: '1.8rem',
                  color: 'primary.main',
               },
               '& .Mui-expanded': {
                  '& p': {
                     color: 'primary.green',
                  },
                  '& svg': {
                     color: 'primary.green',
                  },
               },
            }}
         >
            <Typography>{title}</Typography>
         </AccordionSummary>
         <AccordionDetails>
            <Typography
               sx={{
                  color: '#5A7184',
               }}
            >
               {description}
            </Typography>
         </AccordionDetails>
      </Accordion>
   );
};

export default CreativeAccordion;
