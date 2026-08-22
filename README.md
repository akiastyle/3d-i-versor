# i-versor

A three-dimensional representation of a complex-valued function of a real variable, with a strict separation between the algebraic imaginary unit `i` and the geometric third-axis unit vector `k`.

## Core distinction

The model keeps two different concepts separate:

```text
i = imaginary unit, with i² = -1
k = geometric unit vector, k = (0,0,1)
```

`i` belongs to complex algebra. `k` belongs to the 3D geometric representation.

For

```text
f(x) = u(x) + i v(x)
```

we represent the function as the 3D curve

```text
Γ(x) = (x, u(x), v(x))
```

using the basis

```text
e_x = (1,0,0)
e_y = (0,1,0)
k   = (0,0,1)
```

so that

```text
Γ(x) = x e_x + u(x)e_y + v(x)k
```

or equivalently

```text
Γ(x) = (x, u(x), 0) + v(x)k
```

The scalar `v(x) = Im(f(x))` is not itself a direction. It is the signed real displacement along the geometric `k` direction.

Therefore:

```text
v(x) > 0  -> +k direction
v(x) = 0  -> real plane
v(x) < 0  -> -k direction
```

The algebraic factor `i` remains present in the original complex function, while `k` is only the geometric device used to visualize its real coefficient.

## Planes and axes

The representation uses:

```text
x-axis   -> independent variable
 y-axis  -> Re(f(x))
 k-axis  -> Im(f(x)) coefficient represented geometrically
```

The main planes are:

```text
x-y plane -> real-component graph
x-k plane -> imaginary-coefficient graph

y-k plane -> transverse complex-value plane for a fixed x
```

For each fixed `x`, the point in the `y-k` plane is

```text
(Re(f(x)), Im(f(x)))
```

which is the ordinary complex value expressed geometrically.

## Example 1: x² + i sin(x)

```text
f(x) = x² + i sin(x)
```

so

```text
u(x) = x²
v(x) = sin(x)
Γ(x) = (x, x², sin(x))
```

The two projections are:

```text
x-y plane -> y = x²
x-k plane -> k = sin(x)
```

The full curve combines both graphs without merging their roles.

Here `sin(x)` is a real scalar coefficient. Its sign determines the geometric orientation along `+k` or `-k`, while its magnitude is the distance from the real plane.

## Example 2: pure complex rotation

For

```text
f(x) = (cos x + i sin x) / e^(i2x)
```

Euler's identity gives

```text
f(x) = e^(-ix) = cos(x) - i sin(x)
```

and therefore

```text
Γ(x) = (x, cos(x), -sin(x))
```

This is a unit-radius helix around the `x` axis.

The transverse radius is

```text
sqrt(cos²(x) + sin²(x)) = 1
```

so the complex modulus becomes the geometric distance from the `x` axis.

## Modulus as radius

For a general complex-valued function

```text
f(x) = u(x) + i v(x)
```

the function point is

```text
F(x) = (x, u(x), v(x))
```

and the point on the input axis is

```text
P(x) = (x, 0, 0)
```

Their distance is

```text
|F(x)-P(x)| = sqrt(u(x)² + v(x)²) = |f(x)|
```

Therefore:

```text
complex modulus = geometric radius from the x-axis
```

## Phase as angle

In the transverse `y-k` plane,

```text
arg(f(x)) = atan2(v(x), u(x))
```

so:

```text
complex phase = geometric angle around the x-axis
```

For polar-form functions

```text
f(x) = A(x)e^(i phi(x))
```

we obtain

```text
Γ(x) = (x, A(x)cos(phi(x)), A(x)sin(phi(x)))
```

with the direct geometric interpretation:

```text
A(x)       = radius
phi(x)     = angular position
phi'(x)    = angular rate
```

This makes modulus and phase independently visible in one 3D object.

## Relation to standard mathematics

For

```text
f : R -> C
```

we have

```text
C ≅ R²
R x C ≅ R³
```

Therefore

```text
x -> (x, Re(f(x)), Im(f(x)))
```

is a standard parametrized curve in `R³`.

The specific viewpoint of **i-versor** is terminological and geometric:

```text
i -> algebraic imaginary unit
k -> geometric unit vector used to render Im(f(x))
```

The model does not redefine complex numbers and does not identify `i` with `k`. It uses `k` as the geometric carrier of the real scalar coefficient multiplying `i`.

## Interactive demos

Main demos:

- [`index.html`](index.html) — `f(x) = x² + i sin(x)`
- [`helix.html`](helix.html) — `f(x) = e^(-ix)`

Additional examples are available in [`examples/`](examples/):

| File | Function | 3D behaviour |
|---|---|---|
| [`helix-positive.html`](examples/helix-positive.html) | `e^(ix)` | Unit-radius helix, positive phase |
| [`damped-helix.html`](examples/damped-helix.html) | `e^((-0.15+i)x)` | Radius decays exponentially |
| [`expanding-helix.html`](examples/expanding-helix.html) | `x e^(ix)` | Radius grows linearly |
| [`chirp-helix.html`](examples/chirp-helix.html) | `e^(i x²)` | Constant radius, increasing angular rate |
| [`variable-radius.html`](examples/variable-radius.html) | `(2+sin x)e^(ix)` | Periodically changing radius |
| [`rational.html`](examples/rational.html) | `1/(1+i x)` | Radius decays toward the x-axis |

## Display scaling

Some demos apply display-only scale factors when one component grows much faster than another. These factors modify only the rendering. The numerical values shown remain the actual mathematical values.
