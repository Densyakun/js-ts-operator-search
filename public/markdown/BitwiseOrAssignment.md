---
label: |=
description: ビット論理和代入演算子
link: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment
---

代入演算子のビット論理和版です。ビット論理和の結果を変数に代入します。

JavaScript では、オペランドは符号付き 32 ビットの整数値に変換されます。例えば 2 進数の 9 と 14 のビット論理和は次のようになります。

| 10 進数      | ビット(2 進数)                                  |
| ------------ | ----------------------------------------------- |
| 9            | 00000000000000000000000000001001                |
| 14           | 00000000000000000000000000001110                |
| ビット論理和 | 00000000000000000000000000001111 = 15 (10 進数) |

```typescript
let a = 9
console.log((a |= 14)) // 15
```
