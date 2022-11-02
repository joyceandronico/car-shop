import { ICar } from '../../interfaces/ICar';

const CarMockTest: ICar = {
  model: 'Mercedes EQC 400 4MATIC AMG Line',
  year: 2022,
  color: 'cinza grafite',
  buyValue: 694000,
  seatsQty: 5,
  doorsQty: 4,
}

const CarMockTestWhithId: ICar & {_id: string} = {
  _id: '5gdh40f85762e0ou76000405',
  model: 'Mercedes EQC 400 4MATIC AMG Line',
  year: 2022,
  color: 'cinza grafite',
  buyValue: 694000,
  seatsQty: 5,
  doorsQty: 4,
}

const CarMockTestWithIdMany: ICar[] = [
  CarMockTestWhithId,
  CarMockTestWhithId,
  CarMockTestWhithId
]

export { CarMockTest, CarMockTestWhithId, CarMockTestWithIdMany };
