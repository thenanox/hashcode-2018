const io = require('./io-loader');
let time = 0;

function calculateTime(early) {
    return (early - time < 0) ? 0 : early - time;
}

async function hashcode(inputFile, outputFile) {
    const model = await io.inputLoader(inputFile);
    const pool = createTripPool(model.trips);
    const solution = startSimulation(model, pool);
    io.prepareOutput(outputFile, solution);
}

function createTripPool(trips){
    const pool = trips.slice(0);
    return pool;
}

function startSimulation(model, pool) {
    const cars = createCars(model);
    for(time = 0; time < model.T; time++) {
        if(simulationFinished(cars, pool)) {
            break;
        }
        step(cars, pool);
    }
    return cars.map( car => car.print()).join('\n');
}

function simulationFinished(cars, pool) {
    if(!pool.length) {
        return cars.reduce( (prev, next) => {
            return {busy: !prev.busy && !next.busy}; 
        });
    }
}

function createCars(model) {
    const carsList = [];
    for(let i = 0; i < model.F; i++) {
        const car = {};
        car.busy = 0;
        car.index = i;
        car.tripsLog = [];
        car.position = {
            x: 0,
            y: 0
        };
        car.trip = {};
        car.update = update;
        car.pick = pick;
        car.calculateDistance = calculateDistance;
        car.bestTrip = bestTrip;
        car.move = move;
        car.bonus = model.B;
        car.print = print;
        car.calculateBusy = calculateBusy;
        carsList.push(car);
    }
    return carsList;
}

function step(cars, pool) {
    cars.forEach( car => {
        car.update(pool);
    })
}

function update(pool) {
    if(!this.busy) {
        this.pick(pool);
    } else {      
        this.move();
    }
}

function calculateBusy(trip) {
    const preDistance = this.calculateDistance(this.position, trip.start);
    const time = calculateTime(trip.early);
    const postDistance = this.calculateDistance(trip.start, trip.end);
    return preDistance + time + postDistance;
}

function pick(pool) {
    this.trip = this.bestTrip(pool);
    pool.splice(pool.indexOf(this.trip), 1);
    this.tripsLog.push(this.trip);
    this.busy = this.calculateBusy(this.trip);
    this.position = this.trip.end;    
}

function bestTrip(pool) {
    const bestTrip = pool.reduce((prev, next) => {
        const score = calculateScore(this, next);      
        return prev.score < score ? {trip: next, score: score} : prev;
    }, {trip: {}, score: -1});
    return bestTrip.trip;
}

function move() {
    this.busy--;
}

function print() {
    return this.tripsLog.length + ' ' + this.tripsLog.map( trip => trip.index).join(' ');
}

function calculateScore(car, trip) {
    const distanceToBegin = calculateDistance(car.position, trip.start);
    const bonusArrival = time + distanceToBegin <= trip.early ? car.bonus : 0;
    const distanceToEnd = calculateDistance(trip.start, trip.end);   
    const bonusDistance = time + distanceToBegin + distanceToEnd < trip.finish ? distanceToEnd : 0;
    return bonusArrival + bonusDistance;
}

function calculateDistance(position, end) {
    return Math.abs(position.x - end.x) + Math.abs(position.y - end.y);
}

module.exports = hashcode;
