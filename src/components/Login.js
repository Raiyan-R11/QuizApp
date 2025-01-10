import { Box, Button, Card, CardContent, TextField } from '@mui/material'
import React from 'react'
import Center from './Center';
//& .MuiTextField-root
//& Box class. children of Box class with .MuiTextField-root
function Login() {
  return (
    <Center>
        <Card sx={{width:400}}>
            <CardContent>
                <Box sx={{'& .MuiTextField-root':{
                    m:1,
                    width:'90%'
                }}}>
                <form noValidate>
                    <TextField label="Email" name="email" variant="outlined"/>
                    <TextField label="Name" name="name"variant="outlined"/>
                    <Button type="submit" variant="contained" size="large" sx={{width:'90%'}}>
                        Start
                    </Button>
                </form>
            </Box>
            </CardContent>
        </Card>
    </Center>
    
  );
}

export default Login