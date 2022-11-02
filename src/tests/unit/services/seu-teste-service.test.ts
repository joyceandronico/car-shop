import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { CarMockTest, CarMockTestWhithId, CarMockTestWithIdMany } from '../../mocks/carMock';
import CarService from '../../../services/car.service';
import CarModel from '../../../models/car.model';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';

describe('Service - Car', () => {
    const carModel = new CarModel();
	const carService = new CarService(carModel);

  before(async () => {
    sinon
      .stub(carModel, 'create').resolves(CarMockTest);
  });

  after(()=>{
    sinon.restore();
  })

  describe('create', () => {
    it('carro cadastrado com sucesso', async () => {
        const carCreated = await carService.create(CarMockTest);

        expect(carCreated).to.be.deep.equal(CarMockTest);
    });

  });

});