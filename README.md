# int-bitmask

![Promotional int-bitmask banner showcasing the functionality of the package](https://github.com/jakubmanczak/int-bitmask/blob/master/promo/promo-int-bitmask.png)
Get Boolean flags from a Number in node.

---

# Functions

### checkBit()

Returns true, false or null depending on checked bit in a given number.

First arg: number. Second arg: bit index.

Sample usage:

```ts
checkBit(65, 0); // returns true, as the first bit (index 0) counting from the right is on.
checkBit(65, 1); // returns false, as the second bit (index 1) counting from the right is off.
[...]
checkBit(65, 5); // returns false, as the sixth bit (index 5) counting from the right is off.
checkBit(65, 6); // returns true, as the seventh bit (index 6) counting from the right is on.
checkBit(65, 7); // returns null, which is falsy, as the eighth bit (index 7) is not part of the number.
---
checkBit(-1, 0) // throws [Error: Inputs cannot be negative.]
checkBit(2.5, 0.5) // throws [Error: Inputs must be integers.]
```

### setBit()

Takes a number, changes the given bit and returns the new number.

First arg: number. Second arg: bit index. Third arg: new bit state (0 | 1).

Sample usage:

```ts
setBit(64, 0, 1); // returns 65
setBit(128, 0, 1); // returns 129
setBit(64, 6, 0); // returns 0
---
setBit(-1, 0, 1) // throws [Error: Inputs cannot be negative.]
setBit(2.5, 0.5, 0) // throws [Error: Inputs must be integers.]
```

### setBit()

Takes a number, changes the given bit and returns the new number.

First arg: number. Second arg: bit index. Third arg: new bit state (0 | 1).

Sample usage:

```ts
setBit(64, 0, 1); // returns 65
setBit(128, 0, 1); // returns 129
setBit(64, 6, 0); // returns 0
---
setBit(-1, 0, 1) // throws [Error: Inputs cannot be negative.]
setBit(2.5, 0.5, 0) // throws [Error: Inputs must be integers.]
```
