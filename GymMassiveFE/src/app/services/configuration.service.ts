import { Injectable } from '@angular/core';
import { ConfigurationElement } from '../models';

@Injectable({
	providedIn: 'root'
})
export class ConfigurationService {
	public getConfigurationName(configName: string): ConfigurationElement {
		const configurations = this.getConfiguration();
		return configurations.find((x) => x.configName === configName);
	}

	private getConfiguration(): ConfigurationElement[] {
		return JSON.parse(sessionStorage.getItem('configuration'));
	}
}
