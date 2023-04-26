import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),  
    '0x11e8005d0e8aa3c544e03cfcfc2797944ec5e442'
);
export default instance;
