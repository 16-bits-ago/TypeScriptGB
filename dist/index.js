"use strict";
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
const getArgs = () => {
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
const forEach = (array, callback) => {
    array.forEach((value) => callback(value));
};
//Generic\
const main = () => {
    const args = getArgs();
    if (args) {
        forEach(args, (value) => console.log(value, typeof value));
    }
    else {
        console.log("net peredannih args");
    }
};
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7O1VBYVU7QUFFVixNQUFNLE9BQU8sR0FBRyxHQUF5QixFQUFFO0lBQ3ZDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0VBQWtFO0lBRXRHLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNiLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFQSxPQUFPLFNBQVMsQ0FBQztBQUN0QixDQUFDLENBQUM7QUFFRjs7S0FFSztBQUVMLFNBQVM7QUFDVCxNQUFNLE9BQU8sR0FBRyxDQUFXLEtBQVUsRUFBRSxRQUE0QixFQUFFLEVBQUU7SUFDbkUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFDO0FBQ0YsVUFBVTtBQUVWLE1BQU0sSUFBSSxHQUFHLEdBQUcsRUFBRTtJQUNkLE1BQU0sSUFBSSxHQUFHLE9BQU8sRUFBRSxDQUFDO0lBRXZCLElBQUcsSUFBSSxFQUFDO1FBQ0osT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzlEO1NBQU07UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUE7S0FDckM7QUFFTCxDQUFDLENBQUM7QUFFRixJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbnN0IGdldEFyZ3MgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvY2Vzcy5hcmd2LnNsaWNlKDIpOyAvLyBhcmd2IC0g0LzQsNGB0YHQuNCyINCw0YDQs9GD0LzQtdC90YLQvtCyIFsgMS7Qn9GD0YLRjCDQuiDQvdC+0LTQtSwgMi7Qn9GD0YLRjCDQuiDRjdGC0L7QvNGDINGE0LDQudC70YNdXHJcbn07XHJcblxyXG5jb25zdCBmb3JFYWNoID0gKGFycmF5LCBjYWxsYmFjaykgPT4ge1xyXG4gICAgYXJyYXkuZm9yRWFjaCgodmFsdWUpID0+IGNhbGxiYWNrKHZhbHVlKSk7XHJcbn07XHJcblxyXG5jb25zdCBtYWluID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXJncyA9IGdldEFyZ3MoKTtcclxuICAgIGZvckVhY2goYXJncywgY29uc29sZS5sb2cpO1xyXG59O1xyXG5cclxubWFpbigpOyAqL1xyXG5cclxuY29uc3QgZ2V0QXJncyA9ICgpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCA9PiB7XHJcbiAgICBjb25zdCBhcmdzID0gcHJvY2Vzcy5hcmd2LnNsaWNlKDIpOyAvLyBhcmd2IC0g0LzQsNGB0YHQuNCyINCw0YDQs9GD0LzQtdC90YLQvtCyIFsgMS7Qn9GD0YLRjCDQuiDQvdC+0LTQtSwgMi7Qn9GD0YLRjCDQuiDRjdGC0L7QvNGDINGE0LDQudC70YNdXHJcblxyXG4gICAgaWYgKGFyZ3MubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFyZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn07XHJcblxyXG4vKiBjb25zdCBmb3JFYWNoID0gKGFycmF5OiBhbnlbXSwgY2FsbGJhY2s6ICh2YWx1ZTogYW55KSA9PiB2b2lkKSA9PiB7XHJcbiAgICBhcnJheS5mb3JFYWNoKCh2YWx1ZSkgPT4gY2FsbGJhY2sodmFsdWUpKTtcclxufTsgKi9cclxuXHJcbi8vR2VuZXJpY1xyXG5jb25zdCBmb3JFYWNoID0gPFQgPSBhbnk+IChhcnJheTogVFtdLCBjYWxsYmFjazogKHZhbHVlOiBUKSA9PiB2b2lkKSA9PiB7ICBcclxuICAgIGFycmF5LmZvckVhY2goKHZhbHVlKSA9PiBjYWxsYmFjayh2YWx1ZSkpO1xyXG59O1xyXG4vL0dlbmVyaWNcXFxyXG5cclxuY29uc3QgbWFpbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFyZ3MgPSBnZXRBcmdzKCk7XHJcblxyXG4gICAgaWYoYXJncyl7XHJcbiAgICAgICAgZm9yRWFjaChhcmdzLCAodmFsdWUpID0+IGNvbnNvbGUubG9nKHZhbHVlLCB0eXBlb2YgdmFsdWUpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXQgcGVyZWRhbm5paCBhcmdzXCIpXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubWFpbigpOyJdfQ==