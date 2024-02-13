/*创建一个箭头函数并且返回数组里偶数的新数组*/

const filterEvens = (numbers) => {
    return numbers.filter(number => number % 2 == 0)
};

const numbers = [1,2,3,4,5,6,7,8,9];
const evenNumbers = filterEvens(numbers);
// console.log(evenNumbers);

const creatBook = (title, author, price) => {
    return "The price for the book ${title} written by 'Author ${author}' is $${price}";
}

const stopwatch = {
    startTime: 0,
    isRunning: false,
    recordTimes: [],
    start() {
        if (!this.isRunning) {
            this.startTime = Date.now();
            this.isRunning = true;
            console.log('stopwatch started');
        } else {
            console.log('stopwatch already running');
        }
    }
    stop() {
        if (this.isRunning) {
            this.isRunning = false;
        }
    }
    reset() {
        this.startTime = 0;
        this.isRunning = false;

    }
}