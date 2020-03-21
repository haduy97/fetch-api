import React from 'react';
import Button from '@material-ui/core/Button';
import TableList from '../TableList/index';
import { connect, useDispatch } from 'react-redux';
const ShowList = (props) => {
    const {isOpen} = props
    const dispatch = useDispatch();
    return (
        <div>
            <Button variant="contained" color="secondary"  >Show list</Button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isOpen: state.user.isOpen,
    };
};

export default connect(mapStateToProps,null)(ShowList);