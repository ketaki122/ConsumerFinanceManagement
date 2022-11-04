import React, { Component } from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
class CFMLogin extends Component {
  render() {
    
    return (
        <div>
        <Grid contaier spacing={1}>
        <Grid>
        <Typography  variant="h3" marginLeft={"12em"}marginTop={"1em"}>Login</Typography>
        <TextField label='Username' variant="outlined" type='username'fullWidth/>
        <TextField label='Password' variant="outlined"type='password' fullWidth/>
        <Button  variant='contained' color='primary'type='submit'marginLeft={"1em"}>Submit</Button>
        </Grid>
        <Grid item sm/>
        
        </Grid>
        </div>

    )
  }
}

export default CFMLogin