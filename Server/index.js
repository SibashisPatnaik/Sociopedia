import { Express } from "express";
import bodyparser from "body-parser"
import mongoose from "mongoose";
import cors from "cors";
import Dotnev  from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import { Path } from "mongoose";
import {fileURLToPath} from "url";


const __filename=fileURLToPath(import.meta.url);
const __dirname