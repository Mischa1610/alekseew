/*****************************************************************
 * This is the prod (PROD) environment configuration.            *
 *****************************************************************/

import { environmentBase } from './environment.base';

export const environment = {
  ...environmentBase,
  // Only change properties that needs to be changed from the base environment!
  envName: 'PROD',
  production: true,
  logLevel: 'error',
};
