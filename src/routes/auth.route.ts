import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from 'schema/userSchema';
import jwt from 'jsonwebtoken'
import { envVars } from 'config/envVars.config';
import { loginDataValidation, signUpDataValidation } from 'middlewares/inputvalidation.middleware';
import { signUpController } from 'controllers/signup.controller';
import userAccountValidation from 'middlewares/userAccountValidation.middleware';
import { signInController } from 'controllers/login.controller';
import isUserRegistered from 'middlewares/isUserRegistered.middleware';

const express = require('express');
const authRoutes = express.Router();

authRoutes.post('/login', loginDataValidation, isUserRegistered, signInController);

authRoutes.post('/register', signUpDataValidation, userAccountValidation, signUpController);

export default authRoutes;