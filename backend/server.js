import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Alert } from './models/alert.js';
import { initializeApp, getApps } from 'firebase-admin/app';
import { getAuth as adminAuth } from 'firebase-admin/auth';
