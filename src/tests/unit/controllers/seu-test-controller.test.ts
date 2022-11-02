import * as sinon from 'sinon';
import { expect } from 'chai';
import { CarMockTest } from '../../mocks/carMock';
import { Request, Response } from 'express';
import CarController from '../../../controllers/car.controller';
import CarService from '../../../services/car.service';
import CarModel from '../../../models/car.model';


describe('carController', () => {
    const carModel = new CarModel();
    const carService = new CarService(carModel);
    const carController = new CarController(carService);

    const req = {} as Request;
    const res = {} as Response;


  before(() => {
    sinon.stub(carService, 'create').resolves(CarMockTest);


    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(()=>{
    sinon.restore();
  })

  describe('create', () => {
  it('Carro cadastrado com sucesso', async () => {
    req.body = CarMockTest;
    await carController.create(req, res);

    expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(CarMockTest)).to.be.true;
  });

 });

});
