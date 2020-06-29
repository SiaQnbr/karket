import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));

export default function Sidebar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <MenuList>
                    <MenuItem>
                        <Link to='/'>Dashboard</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/category'>Categories</Link>
                    </MenuItem>
                    <MenuItem>Products</MenuItem>
                    <MenuItem>
                        <Link to='/tag'>Tags</Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <Link to='/user'>Users</Link>
                    </MenuItem>
                    <MenuItem>Roles</MenuItem>
                    <MenuItem>Resources</MenuItem>
                    <MenuItem>Permission</MenuItem>
                    <Divider />
                    <MenuItem>Logout</MenuItem>
                </MenuList>
            </Paper>
        </div>
    );
}
