import React, { useEffect, useState } from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Divider,
    Grid,
    Typography,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { themeLocale } from '../../../actions/customization';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { gridSpacing } from '../../../store/constant';

const RolesPage = () => {
    const { locale } = useSelector((state) => state.customization);
    const dispatch = useDispatch();
    const [language, setLanguage] = useState(locale);

    const handleChange = (event) => {
        setLanguage(event.target.value);
        dispatch(themeLocale(event.target.value));
    };

    useEffect(() => {
        setLanguage(locale);
    }, [locale]);

    return (
        <>
            <Breadcrumb title={<FormattedMessage id="title" />}>
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    <FormattedMessage id="home" />
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    <FormattedMessage id="title" />
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    <FormattedMessage id="title" />
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Box mb={3}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">
                                        <FormattedMessage id="change" />
                                    </FormLabel>
                                    <RadioGroup row aria-label="position" name="position" value={language} onChange={handleChange}>
                                        <FormControlLabel value="es" control={<Radio color="primary" />} label="Español " />
                                        <FormControlLabel value="en" control={<Radio color="primary" />} label="Ingles" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>

                            <Typography variant="body2">
                                <FormattedMessage id="message" />
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default RolesPage
