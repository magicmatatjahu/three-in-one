export const AUTH_SESSION_STORAGE_TOKEN = "AUTH_TOKEN"

export interface LoginDTO {
  email: string;
  password: string;
}

export interface RegistrationDTO {
  email: string;
  password: string;
}
