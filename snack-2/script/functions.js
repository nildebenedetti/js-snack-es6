function myRandomNumbersGenerator() {

    for (let i = 0; i <= 4; i++) {
        let randomNumber = myRandom(1, 50);
        numbersRange.push(randomNumber);
    }

    return numbersRange;

}