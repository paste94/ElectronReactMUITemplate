import Parse from 'parse';

Parse.initialize('ControlProductionServer', 'CP_m4st3r_k3y');
Parse.serverURL = `${localStorage.getItem('ServerUrl')}/parse`;

const patients = 'patients';

export default Parse;
export { patients };
