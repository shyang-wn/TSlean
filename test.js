// 数组
var list1 = [];
list1.push(1, 3);
console.log(list1);
// 函数
function sum(x, y, z) {
    return (x + y + z).toFixed(3);
}
console.log(sum(5.65, 10.5, -5.8));
// 函数左右均定义类型
var sum1 = function (x, y) {
    return (x + y).toFixed(2);
};
console.log(sum1(5.65, 10.5));
var str = "张霞排";
console.log(str.split("").reverse().join(""));
var animal = {
    name: "Tom"
};
var tom = animal;
tom.run;
