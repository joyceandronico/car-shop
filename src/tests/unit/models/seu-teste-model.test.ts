import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { CarMockTest, CarMockTestWhithId, CarMockTestWithIdMany } from '../../mocks/carMock';
import { Model } from 'mongoose';
import CarModel from '../../../models/car.model';


describe('carModel', () => {
    const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(CarMockTestWhithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('create', () => {
    it('Carro cadastrado com sucesso', async () => {
      const newCar = await carModel.create(CarMockTest);
      expect(newCar).to.be.deep.equal(CarMockTestWhithId)
    });
  });

});