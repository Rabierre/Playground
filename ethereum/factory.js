import web3 from './web3';
import ProjectFactory from './build/ProjectFactory.json';

const instance = new web3.eth.Contract(

  JSON.parse(ProjectFactory.interface),
  '0x4A8ABF151a11c0B97191922d29fE7395f6e44E5D'

);

export default instance;
