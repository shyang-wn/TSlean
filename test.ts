// 接口
interface person {
    name:string
    age:number
    weight?:number
    higth?:number
    sex:string
}
// 数组
let list1:number[] = []
list1.push(1,3)
console.log(list1)
// 函数
function sum(x:number,y:number,z:number) : string {
    return (x+y+z).toFixed(3)
}
console.log(sum(5.65,10.5,-5.8))
// 函数左右均定义类型
let sum1:(x:number,y:number) =>string =function (x:number,y:number):string{
    return (x + y).toFixed(2)
}
console.log(sum1(5.65,10.5))
let str:string = "张霞排"
console.log(str.split("").reverse().join(""))
// 断言
interface animal{
    name:string
}
interface cat{
    name:string
    run():void
}
let animal:animal={
    name:"Tom"
}
let tom = animal as cat
tom.run