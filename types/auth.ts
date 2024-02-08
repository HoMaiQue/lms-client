export interface RegisterPayload {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
}

export interface ActivationPayload {
    activationToken: string;
    activationCode: string;
}
