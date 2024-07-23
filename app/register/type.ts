// types.ts

export interface RegistrationFormData {
  email: string;
  password: string;
  confirmPassword: string;
  organization: string;
  phoneNumber: string;
  message: string;
  terms: boolean | string;
}
