import defaultValue, { publicFunction, publicValue } from './module.js';

console.log(defaultValue); // デフォルト変数

console.log(publicValue); // モジュール内の変数

publicFunction(); // モジュール内の関数が呼ばれました