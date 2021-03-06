export interface IClient {
  clientId: string;
  injury: string;
  sideLevel: string;
  strength: string;
  createdAt: string;
}

const tableData: IClient[] = [
  {
    clientId: '84',
    injury: 'ABI',
    sideLevel: 'R side effect',
    strength: 'a',
    createdAt: '01/03/2020 10:40'
  },
  {
    clientId: '85',
    injury: 'ABI',
    sideLevel: 'R side effect',
    strength: 'a',
    createdAt: '01/03/2020 10:40'
  },
  {
    clientId: '86',
    injury: 'ABI',
    sideLevel: 'R side effect',
    strength: 'a',
    createdAt: '01/03/2020 10:40'
  }
];

export default tableData;
