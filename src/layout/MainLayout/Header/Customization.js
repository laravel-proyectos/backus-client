import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme, useMediaQuery, Box, makeStyles, Tooltip, TextField, MenuItem, InputAdornment, Hidden, Button } from '@material-ui/core';

import TranslateIcon from '@material-ui/icons/Translate';
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { themeChange, themeLocale } from '../../../actions/customization';

const currencies = [
    {
        value: 'es',
        label: 'Español ',
    },
    {
        value: 'en',
        label: 'Ingles',
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '350px',
        minWidth: '250px',
        backgroundColor: theme.palette.background.paper,
        paddingBottom: 0,
        borderRadius: '10px',
    },
    subHeader: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.common.white,
        padding: '5px 15px',
    },
    menuIcon: {
        fontSize: '1.5rem',
    },
    gridContainer: {
        padding: '10px',
    },
    formContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    menuButton: {
        [theme.breakpoints.down('sm')]: {
            minWidth: '50px',
        },
        [theme.breakpoints.down('xs')]: {
            minWidth: '35px',
        },
    },
    iconSelect: {
        color: '#fff',
        fontSize: '1.4rem',
    },
    selectColor: {
        color: '#fff',
        //padding: '0 !important',
        fontSize: '1rem',
        marginTop: '4px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.875rem',
        },
    },
    underlineSelect: {
        ':before': {
            display: 'none',
        },
    },
    selectIcon: {
        marginRight: '4px',
        color: '#fff',
    },
}));


export const Customization = () => {
    const classes = useStyles();
    const {rtlLayout, locale, navType} = useSelector(state => state.customization);
    console.log(locale);
    const dispatch = useDispatch();

    const theme = useTheme();
    const matchDownSm = useMediaQuery(theme.breakpoints.down('xs'));
    const [currency, setCurrency] = useState(locale);

    const handleChange = (event) => {
        console.log(event.target.value);
        setCurrency(event.target.value);
        dispatch(themeLocale(event.target.value));
    };

    if (rtlLayout) {
        document.querySelector('body').setAttribute('dir', 'rtl');
    }

    useEffect(() => {
        setCurrency(locale);
    }, [locale]);

    const icon = navType === 'light' ? <Brightness4Icon className={classes.menuIcon} />: <Brightness7Icon className={classes.menuIcon} />;
    const title = navType === 'light' ? 'Modo normal':'Modo oscuro';
    const handlenavType = () => {
        navType === 'light' ? dispatch(themeChange('dark')): dispatch(themeChange('light'))
    };

    return (
        <>
            <Tooltip title="">
                <Box width="80px" ml={matchDownSm ? '8px' : '24px'} mr={matchDownSm ? '8px' : '24px'}>
                    <TextField
                        id="outlined-select-currency"
                        select
                        value={currency}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <Hidden smDown>
                                    <InputAdornment position="start" className={classes.selectIcon}>
                                        <TranslateIcon color="inherit" />
                                    </InputAdornment>
                                </Hidden>
                            ),
                            disableUnderline: true,
                        }}
                        SelectProps={{
                            classes: {
                                select: classes.selectColor,
                                icon: classes.iconSelect,
                            },
                        }}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
            </Tooltip>
            <Tooltip title={title}>
                <Button className={classes.menuButton} color="inherit" onClick={handlenavType}>
                    {icon}
                </Button>
            </Tooltip>
        </>
    )
}
