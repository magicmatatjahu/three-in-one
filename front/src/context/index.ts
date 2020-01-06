import actions, { registerActions } from './actionRegistry';
import services, { registerServices } from './serviceRegister';

export {
  actions,
  services
};

export default {
  actions,
  registerActions,
  services,
  registerServices,
};
