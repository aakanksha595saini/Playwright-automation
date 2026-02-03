 export default class Pearson {
    constructor(name, place) {
        this.name1 = name;
        this.place1 = place;
    }

    describe() {
        // This converts the object into an array and maps through ALL properties
        return Object.entries(this)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n'); // Joins them with a new line
    }
}

const details = {
    name1: 'Sarah',
    place1: 'UK',
    designation: 'Sales',
    responsibility: 'RM'
};

const p1 = new Pearson('John', 'US');
const printDetails = p1.describe.bind(details);

console.log(printDetails());