export interface ConfigurationElement {
	configName: string;
	enabled: true;
}

export interface LoginResponse {
	configuration: ConfigurationElement[];
	email: string;
	refreshToken: string;
	token: string;
	userId: string;
	userType: string;
}
