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
        // console.log('UPDATE', car.index);
        car.update(pool);
    })
}

function update(pool) {
    // console.log(this.busy)
    if(!this.busy) {
        // console.log('PICK', this.index);
        this.pick(pool);
    } else {
        // console.log('MOVE', this.index);        
        this.move();
    }
}

function calculateBusy(trip) {
    const preDistance = this.calculateDistance(this.position, trip.start);
    const time = calculateTime(trip.early);
    const postDistance = this.calculateDistance(trip.start, trip.end);
    // console.log(preDistance, time, postDistance)
    return preDistance + time + postDistance;
}

function pick(pool) {
    // this.trip = pool.shift()
    this.trip = this.bestTrip(pool);
    pool.splice(pool.indexOf(this.trip), 1);
    this.tripsLog.push(this.trip);
    this.busy = this.calculateBusy(this.trip);
    this.position = this.trip.end;    
}

function bestTrip(pool) {
    const bestTrip = pool.reduce((prev, next) => {
        const score = calculateScore(this, next);
        // if(prev.score === score && score > 0) {
        //     // console.log('equal', prev.score, score);     
        //     // console.log('earlys', prev.trip.early, next.early);
        //     return prev.early > next.early ? {trip: next, score: score} : prev;
        // } else {
            // console.log('distinct', prev.score, score);            
            return prev.score < score ? {trip: next, score: score} : prev;
        // }
    }, {trip: {}, score: -1});
    // console.log(bestTrip.trip)
    return bestTrip.trip;
}

function move() {
    this.busy--;
}

function print() {
    return this.tripsLog.length + ' ' + this.tripsLog.map( trip => trip.index).join(' ');
}

function calculateScore(car, trip) {
    // console.log('input', car.index, trip.index)
    const distanceToBegin = calculateDistance(car.position, trip.start);
    // console.log('pre', time, distanceToBegin, trip.early)
    const bonusArrival = time + distanceToBegin <= trip.early ? car.bonus : 0;
    const distanceToEnd = calculateDistance(trip.start, trip.end);
    // console.log('post', time, distanceToBegin, distanceToEnd, trip.finish)    
    const bonusDistance = time + distanceToBegin + distanceToEnd < trip.finish ? distanceToEnd : 0;
    // console.log('bonus', bonusArrival, bonusDistance)
    return bonusArrival + bonusDistance;
}

function calculateDistance(position, end) {
    return Math.abs(position.x - end.x) + Math.abs(position.y - end.y);
}

module.exports = hashcode;
