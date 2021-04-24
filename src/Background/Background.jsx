import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import InputForm from '../InputForm/InputForm';

const defaultProps = {
    bgcolor: "background.paper",
    borderColor: "#C0C0C0",
    m: 1,
    style: {
      width: "95%",
      height: "40rem",
      marginTop: "1.5rem",
      marginBottom: "1rem",
      paddingBottom: "2rem"
    },
  };
  
  const Background = () => {
    return (
      <div display="flex" justifyContent="center" className="main-container">
        <Grid container direction="row" justify="center" alignItems="center">
          <Box boxShadow={3} borderRadius={16} {...defaultProps}>
            <InputForm />
            
          </Box>
        </Grid>
      </div>
    );
  };
  

export default Background
