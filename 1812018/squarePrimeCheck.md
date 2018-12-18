**Any composite number is a product of primes.**

Let say `n = p1 * p2`, where `p2 > p1` and they are primes.

If `n % p1 === 0` then *n* is a composite number.

If `n % p2 === 0` then guess what `n % p1 === 0` as well!

So there is no way that if `n % p2 === 0` but `n % p1 !== 0` at the same time.
In other words if a composite number *n* can be divided evenly by
*p2,p3...pi* (its greater factor) it must be divided by its lowest factor *p1* too.
It turns out that the lowest factor `p1 <= Math.square(n)` is always true;
Some examples:
```
9 = 3 * 3 -> p1 <= Math.square(9),
12 = 2 * 2 * 3 -> p1 <= 3.46...,
27 = 3 * 3 * 3 -> p1 <= Math.square(27)
```
