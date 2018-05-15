// var test = {

//     get o(){
//         console.log('监听到正在获取属性o的值');
//         return this._o;
//     },
//     set o(v){
//         console.log('监听到正在设置属性o的值为：' + v);
//         this._o = v;
//         return this._o;
//     }
// }
// //上面的声明方式无法对已经存在的对象进行getter和setter“属性”的添加，
// //只能在对象声明的时候设置。
// test.o = 14; // 监听到正在设置属性o的值为：14
// console.log(test.o); // 监听到正在获取属性o的值
var test = {
    
};
Object.defineProperty(test, 'o', {
  get() {
     console.log('监听到正在获取属性o的值');
     return this._o+1;
  },
  set(v) {
    console.log('监听到正在设置属性o的值为：' + v);
    this._o = v;
    return this._o;
  }
});

test.o = 14; // 监听到正在设置属性o的值为：14
console.log(test.o); // 监听到正在获取属性o的值