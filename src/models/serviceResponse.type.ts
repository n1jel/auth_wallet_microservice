export interface ServiceResponse {
    status: boolean;
    statusCode: number;
    message: string;
    token?: string;
};

export interface LoginResponse extends ServiceResponse {
    data?: { userDetails: any, token: string };
}

