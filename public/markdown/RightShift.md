---
label: >>
description: 右シフト演算子
link: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Right_shift
---

左のオペランドを、右のオペランド分だけ右にずらします。

JavaScript では、オペランドは符号付き 32 ビットの整数値に変換され、ずらしたことであふれたビットは抹消されます。最上位のビットは前の値をコピーしながら入るので符号は変化しません。

| 10 進数                   | ビット(2 進数)                                 |
| ------------------------- | ---------------------------------------------- |
| 9                         | 00000000000000000000000000001001               |
| 9 を 2 ビットだけ右シフト | 00000000000000000000000000000010 = 2 (10 進数) |

```typescript
console.log(9 >> 2) // 2
```
