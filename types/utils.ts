export interface SuccessResponse<Data> {
    message: string;
    status: number;
    metaData: Data 
}

export interface ErrorResponse<Data> {
    message: string;
    status: number;
    errors?: Data;
}
