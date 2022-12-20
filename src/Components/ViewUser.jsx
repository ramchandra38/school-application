import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Button } from '@material-ui/core';
import { getallUsers } from '../service/api';
import { useHistory, useParams } from 'react-router-dom';

const initialValue = {
    name: "",
    studclass: "",
    marks: "",
    phone: "",
}

const ViewUser = () => {

    const [user, setUser] = useState(initialValue);
    const { name, studclass, marks, phone } = user;

    const { id } = useParams();

    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = async () => {
        const response = await getallUsers(id);
        setUser(response.data);
    }

    const history = useHistory();

    return (
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center">View Student Details</Typography>
                <div>
                    <strong>Name</strong>:&nbsp;&nbsp; {name} <br />
                    <strong>Class</strong>:&nbsp;&nbsp; {studclass} <br />
                    <strong>Marks</strong>:&nbsp;&nbsp; {marks} <br />
                    <strong>Phone</strong>:&nbsp;&nbsp; {phone} 
                </div>
                <Box my={3}>
                    <Button onClick={() => history.push("/all")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                </Box>
            </Box>
        </Container>
    )
}


export default ViewUser;