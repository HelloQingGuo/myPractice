function cloneDeep(srcObj) {
    const copy = {};
    for (const key in srcObj) {
        if (srcObj[key] === Object(srcObj[key])) {
            // object type
            copy[key] = cloneDeep(srcObj[key]);
        } else {
            // primitive type
            copy[key] = srcObj[key];
        }

    }
    return copy;
}


function Person(name) {
    this.name = name;
}

function Student(score) {
    this.score = score;
}

Student.prototype.bioinfo = new Person('foo');

const student = new Student(99);

const copy = cloneDeep(student);

copy.bioinfo.name = 'bar';

// expected not equal, because we are deeply clone the k-v pairs
// for non-primitive types, instead of copying its reference,
// we are copying the whole object it is pointing
console.log(copy.bioinfo.name !== student.bioinfo.name);

