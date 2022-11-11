import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
    public statusCode = 400;
    public reason = "Error connection to database";
    constructor(){
        super("Error connecting to database");
        
        // only because we are extending a built in class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
    }
    public serializeErrors(){
        return [
            {message: this.reason}
        ]
    }
}