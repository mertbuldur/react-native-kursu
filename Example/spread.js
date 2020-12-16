const object = {
    a:1,
    b:2,
    c:3,
    d:4
};

const object2 = {
    e:5,
    ...object
}
//console.log(object2);

const arr = [1,2,3,4,5,6,7];
const arr2 = [...arr,8,9,10];
console.log(arr2)
