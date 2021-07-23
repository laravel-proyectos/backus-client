import React from 'react';
import { Card, CardContent, Divider, Typography, makeStyles, Grid, TextField, Button } from '@material-ui/core';
import Icono from '../../../assets/images/logo-two.png'


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        minHeight: '100%'
    },
    backButton: {
        marginLeft: theme.spacing(2),
    },
    card: {
        overflow: 'visible',
        display: 'flex',
        position: 'relative',
        '& > *': {
            flexGrow: 1,
            flexBasis: '50%',
            width: '50%',
        },
        maxWidth: '475px',
        margin: '24px auto',
    },
    content: {
        padding: theme.spacing(5, 4, 3, 4),
    },
    forgot: {
        textDecoration: 'none',
        paddingLeft: '10px',
    },
    margin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    }
}));


export const LoginPage = () => {
    const classes = useStyles();
    return (
        <Grid container justifyContent="center" alignItems="center" className={classes.root}>
            <Grid item xs={11} sm={7} md={6} lg={4}>
                <Card className={classes.card}>
                    <CardContent className={classes.content}>
                        <Grid container direction="column" spacing={4} justifyContent="center">
                            <Grid item xs={12}>
                                <Grid container justifyContent="center">
                                    <Grid item>
                                        <img height="90" alt="Auth method" src={Icono} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    autoFocus
                                    label="Correro electrónico"
                                    margin="normal"
                                    name="email"
                                    type="email"
                                    defaultValue=""
                                    variant="outlined"
                                />
                                <TextField
                                    fullWidth
                                    label="Contraseña"
                                    InputProps={{
                                        classes: {
                                            notchedOutline: classes.notchedOutline
                                        }
                                    }}
                                    margin="normal"
                                    name="password"
                                    type="password"
                                    defaultValue=""
                                    variant="outlined"
                                />
                                <Button 
                                    variant="contained" 
                                    size="large" 
                                    color="primary" 
                                    className={classes.margin}
                                    fullWidth
                                >
                                    Ingresar
                                </Button>
                            </Grid>
                            <Divider />
                            <Grid container justifyContent="flex-start" className={classes.margin}>
                                <Grid item>
                                    <Typography
                                        variant="subtitle2"
                                        color="primary"
                                        to="/register"
                                        className={classes.forgot}
                                    >
                                        Desarrollado por CD Juliaca
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
