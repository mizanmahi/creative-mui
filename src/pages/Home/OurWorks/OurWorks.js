import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreativeCard from '../../../components/custom/CreativeCard/CreativeCard';

const OurWorks = () => {
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      console.log(newValue);
      setValue(newValue);
   };

   return (
      <Box sx={{
         my: 11,
      }}>
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'space-between',
               alignItems: 'center',
               mb: 5,
            }}
         >
            <SectionTitle
               title='Here are some of'
               colored='our works'
               sx={{
                  textAlign: 'left',
               }}
            />
            <Box
               sx={{
                  // width: '100%',
                  bgcolor: 'background.paper',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
               }}
            >
               <Tabs
                  value={value}
                  onChange={handleChange}
                  centered
                  sx={{
                     '& .MuiTabs-indicator': {
                        display: 'none',
                     },
                     '& .MuiButtonBase-root': {
                        fontWeight: 'bold',
                     },
                     '& .Mui-selected': {
                        color: '#7AB259',
                     }
                  }}
               >
                  <Tab label='All' />
                  <Tab label='Web' />
                  <Tab label='Mobile' />
               </Tabs>
               <Box
                  sx={{
                     ml: 4,
                  }}
               >
                  <IconButton
                     sx={{
                        border: (theme) =>
                           `1px solid ${
                              value === 0
                                 ? '#959EAD'
                                 : theme.palette.primary.main
                           }`,
                        color: (theme) => theme.palette.primary.main,
                        mr: 2,
                     }}
                     onClick={() => setValue(value - 1)}
                     disabled={value === 0}
                  >
                     <ArrowBackIcon />
                  </IconButton>
                  <IconButton
                     sx={{
                        border: (theme) =>
                           `1px solid ${
                              value === 2
                                 ? '#959EAD'
                                 : theme.palette.primary.main
                           }`,
                        color: (theme) => theme.palette.primary.main,
                     }}
                     onClick={() => setValue(value + 1)}
                     disabled={value === 2}
                  >
                     <ArrowBackIcon
                        sx={{
                           transform: 'rotate(180deg)',
                        }}
                     />
                  </IconButton>
               </Box>
            </Box>
         </Box>
         

         {/* card section */}
         <Box>
                        <CreativeCard />
         </Box>
      </Box>
   );
};

export default OurWorks;
