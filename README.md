# 3d-i-versor

A three-dimensional representation of a complex-valued function of a real variable, interpreting `i` as a **geometric unit direction** and the coefficient of the imaginary part as the **distance along that direction**.

> In standard English mathematical terminology, *unit vector* is preferred to *versor*. The repository name keeps the original concept name `3d-i-versor`, while the documentation uses both terms where useful.

## Core idea

For a function

```text
f(x) = u(x) + i v(x)
```

we construct the 3D curve

```text
Γ(x) = (x, u(x), v(x))
```

where:

- the `x` axis is the independent variable;
- the `y` axis is the real component `u(x) = Re(f(x))`;
- the `z` axis stores the real coefficient `v(x) = Im(f(x))` along the direction associated with `i`.

In this interpretation, `i` is **not a magnitude**. It identifies the third unit direction.

Using a basis of R³:

```text
e_x = (1,0,0)
e_y = (0,1,0)
e_i = (0,0,1)
```

the curve can be written as

```text
Γ(x) = x e_x + u(x) e_y + v(x) e_i
```

or equivalently

```text
Γ(x) = (x, u(x), 0) + v(x)e_i
```

The sign of `v(x)` determines the orientation `+i` or `-i`, while `|v(x)|` is the distance from the real plane `z = 0`.

## Example

The interactive demo uses

```text
f(x) = x² + i sin(x)
```

therefore

```text
u(x) = x²
v(x) = sin(x)
Γ(x) = (x, x², sin(x))
```

The representation contains two distinct graphs at the same time:

```text
G_R(x) = (x, x², 0)
G_I(x) = (x, 0, sin(x))
```

The complete curve combines both contributions while keeping their geometric roles separate.

## Interpreting `i` as a unit direction

For a term such as

```text
5i = 5 · i
```

the adopted geometric reading is:

- `5` = real magnitude;
- `i` = direction;
- `-5i` = the same magnitude in the opposite direction.

Therefore

```text
v(x)i = |v(x)| · direction(+i or -i)
```

This is a geometric interpretation of the standard decomposition into real and imaginary components. It does **not** change complex-number algebra.

For the example

```text
sin(x)i
```

we can read:

- `|sin(x)|` as a real distance;
- the sign of `sin(x)` as the choice between `+i` and `-i`.

This preserves the continuous sinusoidal behaviour. The imaginary component is not reduced to the discrete states `-1`, `0`, `+1`.

## What the 3D graph shows

For each value of `x`, the function point is

```text
F(x) = (x, u(x), v(x))
```

and the corresponding point on the input axis is

```text
P(x) = (x, 0, 0)
```

The displacement inside the plane orthogonal to the `x` axis is

```text
F(x) - P(x) = (0, u(x), v(x))
```

Its length is

```text
|F(x)-P(x)| = sqrt(u(x)² + v(x)²) = |f(x)|
```

so the **complex modulus** becomes an ordinary Euclidean distance.

The angle in the same transverse plane is

```text
arg(f(x)) = atan2(v(x), u(x))
```

so the **complex argument / phase** becomes a geometric orientation.

For

```text
f(x) = x² + i sin(x)
```

this gives

```text
|f(x)| = sqrt(x⁴ + sin²(x))
arg(f(x)) = atan2(sin(x), x²)
```

The visualization also makes several behaviours directly visible:

- `sin(x) = 0` → the complete curve lies on the real plane;
- `sin(x) > 0` → displacement in the `+i` direction;
- `sin(x) < 0` → displacement in the `-i` direction;
- the `2π` periodicity of `sin(x)` appears as a repeated oscillation around the real base curve;
- the real component `x²` and the imaginary coefficient `sin(x)` remain simultaneously observable.

## Relation to standard mathematics

For

```text
f : R → C
```

we have the real-vector-space identification

```text
C ≅ R²
```

and therefore

```text
R × C ≅ R³
```

Hence

```text
x ↦ (x, Re(f(x)), Im(f(x)))
```

is a standard parametrized curve in R³.

The specific viewpoint explored by this project is to interpret the third basis vector

```text
e_i = (0,0,1)
```

as the geometric direction associated with `i`, while `Im(f(x))` remains a real scalar coefficient along that direction.

The model is therefore **not a new definition of the complex numbers**. It is a geometric visualization of the graph of a complex-valued function of a real variable, with an explicit separation between:

```text
magnitude  ×  direction
```

for the imaginary contribution.

## Projection view

The full 3D curve is

```text
Γ(x) = (x, u(x), v(x))
```

Its projections recover the two component functions:

```text
xy projection → (x, u(x)) = real component
xz projection → (x, v(x)) = imaginary coefficient
```

For the demo:

```text
xy projection → y = x²
xz projection → z = sin(x)
```

This is one of the main practical advantages of the representation: both component graphs are embedded in a single geometric object.

## Interactive demo

Open:

```text
index.html
```

The demo uses Three.js and OrbitControls and provides:

- free 3D rotation;
- zoom in / zoom out;
- camera reset;
- exploration of `x` over `[-4π, 4π]`;
- simultaneous display of the real base curve and the full complex curve;
- an interactive sample point;
- numerical values for `x`, `x²`, `sin(x)`, `+i/-i` direction, `|sin(x)|`, modulus and argument.

## Display scaling

Over the interval `[-4π, 4π]`, `x²` grows much faster than `sin(x)`. To keep both components visually readable, the demo uses display-only scale factors:

```text
displayed y = x² × 0.1
displayed i-direction displacement = sin(x) × 3
```

These factors affect only the rendering. The numerical values shown by the interface remain the actual mathematical values of the function.
