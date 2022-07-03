/* const getArgs = () => {
    return process.argv.slice(2); // argv - массив аргументов [ 1.Путь к ноде, 2.Путь к этому файлу]
};

const forEach = (array, callback) => {
    array.forEach((value) => callback(value));
};

const main = () => {
    const args = getArgs();
    forEach(args, console.log);
};

main(); */

const getArgs = (): string[] | undefined => {
    const args = process.argv.slice(2); // argv - массив аргументов [ 1.Путь к ноде, 2.Путь к этому файлу]

    if (args.length) {
        return args;
    }

     return undefined;
};

/* const forEach = (array: any[], callback: (value: any) => void) => {
    array.forEach((value) => callback(value));
}; */

//Generic
const forEach = <T = any> (array: T[], callback: (value: T) => void) => {  
    array.forEach((value) => callback(value));
};
//Generic\

const main = () => {
    const args = getArgs();

    if(args){
        forEach(args, (value) => console.log(value, typeof value));
    } else {
        console.log("net peredannih args")
    }

};

main();