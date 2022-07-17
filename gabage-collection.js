

// オブジェクトの実体{name:'hehe'}がメモリ上に配置される、objは、その実体への参照を保持している
let obj = {name:'hehe'};
console.log(obj); // { name: 'hehe' }

// 変数obj→実体{name:'hehe'}への参照はなくなる
obj = null;

// 実体{name:'hehe'}への参照は存在しないので、ガベレージコレクションが実施される
console.log(obj); // null



// 配列を用いて参照を保持した場合、参照が保持され続けてメモリリークが発生する可能性がある

// obj2の宣言
// オブジェクトの実体{name:'hehe'}がメモリ上に配置される、obj2は、その実体への参照を保持している。
let obj2 = {name:'hehe'};

// arrayの宣言
// arrayに、実体{name:'hehe'}への参照が保持される
let array = [obj2];
console.log(array); //[ { name: 'hehe' } ]。

// obj2にnullを代入する
// obj2→実体{name:'hehe'}への参照はなくなる
obj2 = null;

// しかし、array→実体{name:'hehe'}への参照が存在するので、ガベレージコレクションは実施されない
console.log(array); // [ { name: 'hehe' } ] arrayから実体{name:'hehe'}への参照が存在している

