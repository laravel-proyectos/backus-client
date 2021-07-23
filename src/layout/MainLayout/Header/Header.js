import { Box, Hidden, IconButton, makeStyles, Grid } from '@material-ui/core';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import React from 'react'
import { drawerWidth } from '../../../store/constant';
import logo from '../../../assets/images/logo.png';
import { SearchSection } from './SearchSection';
import { Customization } from './Customization';
import { NotificationSection } from './NotificationSection';
import { ProfileSection } from './ProfileSection';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1.25),
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    menuIcon: {
        fontSize: '1.5rem',
    },
}));


export const Header = ({drawerToggle}) => {
    const classes = useStyles();

    return (
        <>
            <Box width={drawerWidth}>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Hidden smDown>
                        <Grid item>
                            <Box mt={0.5}>
                                <img height="38" src={logo}  alt="Logo"/>     
                            </Box>
                        </Grid>
                    </Hidden>
                    <Grid item>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={drawerToggle}
                        >
                            <MenuTwoToneIcon className={classes.menuIcon} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
            <div className={classes.grow}/>
            <SearchSection theme="light" />  
            <Customization /> 
            <NotificationSection />
            <ProfileSection />
        </>
    )
}
