import Pearson from "./basicclass1.js";
class Users extends Pearson
{
    constructor(name, place) {
       super(name,place)
    }

    
}


const details = {
    designation: 'IT',
    responsibility: 'Software dev.',
    location : 'Onsite'
};
const user1 = new Users('ABCD', 'WES');
const printDetails = user1.describe.bind(details);

console.log(printDetails());