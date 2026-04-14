function multiplyByFive(num){
    return num * 5;
}

multiplyByFive.power = 4;

console.log(multiplyByFive(4));
console.log(multiplyByFive.power);

function createUser(username, score){
    this.username = username;
    this.score = score;
}