import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import React from 'react'
import Center from './Center';
import useForm from '../hooks/useForm';
//& .MuiTextField-root
//& Box class. children of Box class with .MuiTextField-root

const getFreshModel = () => ({
    name: '',
    email: '',
});

function Login() {

    const {
        values,
    setValues,
    errors,
    setErrors,
    handleInputChange
    } = useForm(getFreshModel);


    const login = e => {
        e.preventDefault(); // Prevents page reload onSubmit
        if (validate()){
            console.log(values);
        }
        
    }

    const validate = () => {
        let temp = {}
        temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid."
        temp.name = values.name != "" ? "" : "This field is required."
        setErrors(temp)
        return Object.values(temp).every(x => x == "")
    }

    // Dynamic rendering with {...(errors.email && { error: true, helperText: errors.email })}
    // If errors for email exists then show error
    return (
    <Center>
        <Card sx={{width:400}}>
            <CardContent sx={{textAlign: 'center'}}>
                <Box sx={{'& .MuiTextField-root':{
                    m:1,
                    width:'90%'
                    }}}>
                    <Typography variant="h3" sx={{my:3}}>
                        Quiz App
                    </Typography>
                    <form noValidate autoComplete='off' onSubmit={login}>
                        <TextField 
                        label="Email" 
                        name="email" 
                        variant="outlined" 
                        onChange={handleInputChange} 
                        value={values.email}
                        {...(errors.email && { error: true, helperText: errors.email })}
                        />
                        <TextField 
                        label="Name" 
                        name="name"
                        variant="outlined" 
                        onChange={handleInputChange} 
                        value={values.name}
                        {...(errors.name && { error: true, helperText: errors.name })}
                        />
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