const arr = ['Ala', 'Kasia', 'Szymek', 'Tomek'];

function mapping(name, index) {
console.log(name, index)
}

const newArr = arr.map(mapping);
// arr.forEach(mapping)

function filter(name) {
    if(name === 'Szymek') {
        return true;
    }
    return false;
};

const newFilteredArr = arr.filter(filter);

arr.reduce()