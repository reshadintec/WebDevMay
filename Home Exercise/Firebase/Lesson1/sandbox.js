//rest parameter
const double = (...nums)=>{
    console.log(nums);
    return nums.map(num=>num*2);
}

const result = double(1,3,5,7,9);
console.log(result);


// spread syntax (arrays)

const people = ['shuan', 'ryu', 'crystal','ryu'];
console.log("before using spread" ,people);
console.log(...people);


//sets 
const setConcept = new Set(people);
console.log(setConcept);
//converting set back to array 

const uniqPeople = [...setConcept];
console.log("Array of Unique Names",uniqPeople);

//shortcut of sets and arrays 

const uniqueBodys = [...new Set(people)]; //creating a set and converting it back to array 
console.log(uniqueBodys);


//creating a blank set 

const ages = new Set();
ages.add(20);
ages.add(25).add(40).add(43);
ages.add(20); //ignores the duplicate 
console.log(ages);
ages.delete(43);
console.log(ages, ages.size);
console.log(ages.has(30));

ages.clear();
console.log('set empties',ages);

