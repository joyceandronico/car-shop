import { Router } from 'express';
import CarController from '../controllers/car.controller';
import CarModel from '../models/car.model';
import CarService from '../services/car.service';

const carRouter = Router();

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

carRouter.post('/cars', (req, res) => carController.create(req, res));
carRouter.get('/cars', (req, res) => carController.read(req, res));
carRouter.get('/cars/:id', (req, res) => carController.readOne(req, res));

export default carRouter;