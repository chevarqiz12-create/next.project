export interface ModalsProps {
  setShowModal: (value: boolean) => void;
  onAuthSuccess?: (token: string) => void;
}

export interface registerPhone {
  phone_number: string;
  method: string;
  type: string;
}

export interface verifyRequest {
  phone_number: string;
  otp: string;
}

export interface registerRequest {
  phone_number: string;
  password: string;
  email: string;
  full_name: string;
}

export interface loginRequest {
  phone_number: string;
  password: string;
}

export interface PasswordResetRequest {
  method: string;
  phone_number: string;
}

export interface passwordResetVerify {
  phone_number: string;
  otp: string;
}

export interface newPass {
 
  phone_number: string;
  otp: string;
  new_password: string;
}




