import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addUser } from '../service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    name: "",
    studclass : "",
    marks: "",
    phone: "",
}

const AddUser = () => {

    const [user, setUser] = useState(initialValue);
    const {name, studclass, marks, phone} = user;

    const history = useHistory();

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
       console.log(user);
    }

    const addUserDetails = async () =>{
       await addUser(user);
       history.push('/all');
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
            <Typography variant="h5" align="center">Add Student Details</Typography>
            <FormGroup>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
                </FormControl>
                <FormControl>
                    <InputLabel>Class</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="studclass" value={studclass} />
                </FormControl>
                <FormControl>
                    <InputLabel>Marks</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="marks" value={marks} />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone Number</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} />
                </FormControl>
                <Box my={3}>
                    <Button variant="contained" onClick={() => addUserDetails() } color="primary" align="center">Add User</Button>
                    <Button onClick={()=> history.push("/all")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancel</Button>
                </Box>
            </FormGroup>
            </Box>
        </Container>
    )
}


export default AddUser;