import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect, useDispatch } from 'react-redux';
import {getUser} from'../../redux/action/index'


const TableList = (props) => {
    const { users, errorCatch } = props;
    const dispatch = useDispatch();
    console.log(errorCatch);
    

    useEffect(() => {
        dispatch(getUser())
    },[]);

    // gắn cờ
    if(errorCatch.error ){
        // set time hiển thị
        setTimeout(() => {
            window.alert(errorCatch.message)
        }, 3000);
    }
    return (
        <div>
            <TableContainer component={Paper} >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Username</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(user => (
                            <TableRow key={users.id}>
                                <TableCell align="right">
                                    {user.id}
                                </TableCell>
                                <TableCell align="right">{user.name}</TableCell>
                                <TableCell align="right">{user.username}</TableCell>
                                <TableCell align="right">{user.email}</TableCell>
                                <TableCell align="right">{user.phone}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        users: state.usersManagement.users,
        errorCatch: state.usersManagement.errorCatch
    };
};

export default connect(mapStateToProps, null)(TableList);