
//Define Interface  Drivable
interface Drivable {   

    // Starts the car's ignition so that it can drive.
    start(): void;
    
    // Attempt to drive a distance. Returns true or false based on whether or not the drive was successful.
    drive(distance: number): boolean;
    
    // Give the distance from the start.
    getPosition(): number;
}

class Car implements Drivable {
    
    private _isRunning: boolean;
    private _distanceFromStart: number;

    constructor() {
        this._isRunning = false;
        this._distanceFromStart = 0;
    }

    /**
    *   Starts the car's ignition so that it can drive.
    */
    public start() {
        this._isRunning = true;
    }

    /**
    *   Attempt to drive a distance. Returns true or false based on whether or not the drive was successful.
    *
    *   @param {number} distance The distance attempting to cover
    *
    *   @returns {boolean} Whether or not the drive was successful
    */
    public drive(distance: number): boolean {
    
        if (this._isRunning) {
            this._distanceFromStart += distance;
            return true;
        }
    
        return false;
    }

    
    /**
    *   Gives the distance from starting position
    *
    *   @returns {number} Distance from starting position;
    */
    public getPosition(): number {
        return this._distanceFromStart;
    }
}

//  One more exercise for Interface and class as mentioned above:     interface Flyable { ... } class Helicopter implements Flyable { ... } class FlyingCar implements Drivable, Flyable { ... } 



//Define Interface  Drivable
interface Flyable {   

    // Starts the car's ignition so that it can drive.
    startflying(): void;
    
    // Give the distance from the start.
    getFlyingPosition(): number;
}

class Helicopter implements Flyable {
    
    private _isFlying: boolean;
    private _distanceFromStart: number;

    constructor() {
        this._isFlying = false;
        this._distanceFromStart = 0;
    }

    /**
    *   Starts the car's ignition so that it can drive.
    */
    public startflying() {
        this._isFlying = true;
    }

        
    /**
    *   Gives the distance from starting position
    *
    *   @returns {number} Distance from starting position;
    */
    public getFlyingPosition(): number {
        return this._distanceFromStart;
    }
}


class FlyingCar implements Drivable,Flyable {
    
    private _isRunning: boolean;
    private _distanceFromStart: number;
    private _isFlying: boolean;
    private _distanceFromStartFlyingCar: number;

    constructor() {
        this._isRunning = false;
        this._distanceFromStart = 0;
        this._isFlying = false;
        this._distanceFromStartFlyingCar = 0;
    }

    /**
    *   Starts the car's ignition so that it can drive.
    */
    public start() {
        this._isRunning = true;
    }

    /**
    *   Attempt to drive a distance. Returns true or false based on whether or not the drive was successful.
    *
    *   @param {number} distance The distance attempting to cover
    *
    *   @returns {boolean} Whether or not the drive was successful
    */
    public drive(distance: number): boolean {
    
        if (this._isRunning) {
            this._distanceFromStart += distance;
            return true;
        }
    
        return false;
    }

    /**
    *   Gives the distance from starting position
    *
    *   @returns {number} Distance from starting position;
    */
    public getPosition(): number {
        return this._distanceFromStart;
    }


    /**
    *   Starts the car's ignition so that it can drive.
    */
    public startflying() {
        this._isFlying = true;
    }

        
    /**
    *   Gives the distance from starting position
    *
    *   @returns {number} Distance from starting position;
    */
    public getFlyingPosition(): number {
        return this._distanceFromStart;
    }

}
