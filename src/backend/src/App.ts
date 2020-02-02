import express from 'express';
import passport from 'passport';
import flash from 'express-flash';
import bodyParser from 'body-parser';
import lusca from 'lusca';
import morgan from 'morgan';
import { RegisterRoutes } from './Register/Routes/RegisterRoutes';

const App = express();

// todo add log on which port app is listening
App.set('port', process.env.PORT || 3000);
App.use(passport.initialize());
App.use(passport.session());
App.use(flash());
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));
App.use(lusca.xframe('SAMEORIGIN'));
App.use(lusca.xssProtection(true));
App.use(morgan('combined'));
App.listen(App.get('port'));
App.use(RegisterRoutes.createRegisterRoutes());
console.log("App listening on port: " + (process.env.PORT || 3000))