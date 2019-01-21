import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export interface IAppConfig {
    baseUrl: string;
}

export const AppConfig: IAppConfig = {
    baseUrl: 'http://localhost:5000'
};
