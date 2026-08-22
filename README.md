# 3d-i-versor

A 3D visualization of complex-valued functions of a real variable, with `i` interpreted as a **geometric unit direction** and the imaginary coefficient interpreted as a **real distance along that direction**.

> In standard English mathematical terminology, *unit vector* is more common than *versor*. The repository keeps the original name `3d-i-versor` because it captures the geometric idea being explored.

## Core model

For

```text
f(x) = u(x) + i v(x)
```

we draw

```text
Γ(x) = (x, u(x), v(x))
     = (x, Re(f(x)), Im(f(x)))
```

using the basis

```text
e_x = (1,0,0)
e_y = (0,1,0)
e_i = (0,0,1)
```

so that

```text
Γ(x) = x e_x + u(x)e_y + v(x)e_i
```

In this interpretation:

- `x` is the independent variable;
- `u(x)` is the real component;
- `e_i` is the direction associated with `i`;
- `v(x)` is the real scalar coefficient along `e_i`;
- the sign of `v(x)` selects `+i` or `-i`;
- `|v(x)|` is the distance from the real plane in the imaginary direction.

This does **not** redefine complex-number algebra. It is a geometric representation of the standard decomposition into real and imaginary components.

## First example

The main interactive demo uses

```text
f(x) = x² + i sin(x)
```

therefore

```text
Γ(x) = (x, x², sin(x))
```

The two component graphs are simultaneously embedded in the same object:

```text
xy projection → y = x²
xz projection → z = sin(x)
```

Open [`index.html`](index.html).

## Modulus and phase become geometry

At a fixed value of `x`, define

```text
P(x) = (x,0,0)
F(x) = (x,Re(f(x)),Im(f(x)))
```

Then

```text
|F(x)-P(x)|
= sqrt(Re(f(x))² + Im(f(x))²)
= |f(x)|
```

so the **complex modulus** is literally the radial distance from the `x` axis.

The angular position around the `x` axis is

```text
arg(f(x)) = atan2(Im(f(x)), Re(f(x)))
```

so the **complex argument / phase** becomes an ordinary geometric angle.

For functions written in polar form

```text
f(x) = A(x)e^(iφ(x))
```

the 3D representation is

```text
Γ(x) = (x, A(x)cos(φ(x)), A(x)sin(φ(x)))
```

which gives the direct interpretation

```text
A(x)   = radius from the x-axis
φ(x)   = angular position around the x-axis
```

## Helix example

The second root-level demo is

```text
f(x) = (cos x + i sin x) / e^(i2x)
     = e^(-ix)
     = cos x - i sin x
```

therefore

```text
Γ(x) = (x, cos x, -sin x)
```

Since

```text
cos²x + sin²x = 1
```

the curve is a unit-radius helix around the `x` axis.

Open [`helix.html`](helix.html).

## Interactive example collection

Additional examples are available in [`examples/`](examples/README.md):

| Example | Function | Geometric behaviour |
|---|---|---|
| [`helix-positive`](examples/helix-positive.html) | `e^(ix)` | Constant radius 1, linear positive phase |
| [`damped-helix`](examples/damped-helix.html) | `e^((-0.15+i)x)` | Phase keeps rotating while the radius decays exponentially |
| [`expanding-helix`](examples/expanding-helix.html) | `x e^(ix)` | Radius grows linearly with `x` |
| [`chirp-helix`](examples/chirp-helix.html) | `e^(i x²)` | Radius stays 1 while angular velocity increases |
| [`variable-radius`](examples/variable-radius.html) | `(2+sin x)e^(ix)` | Rotating curve with a pulsating radius between 1 and 3 |
| [`rational`](examples/rational.html) | `1/(1+i x)` | Real and imaginary components decay toward the `x` axis |

These examples use a shared interactive renderer: [`examples/complex-demo.js`](examples/complex-demo.js).

## Why these examples are useful

The collection separates different complex behaviours geometrically:

- **pure phase change** → rotation at constant radius;
- **changing modulus** → radial expansion or contraction;
- **changing phase velocity** → tighter or looser winding;
- **simultaneous modulus and phase modulation** → a varying-radius helix;
- **decay toward zero** → convergence toward the `x` axis.

This makes the polar decomposition

```text
f(x) = |f(x)| e^(i arg(f(x)))
```

visually explicit in three dimensions.

## Mathematical context

For

```text
f : R → C
```

we have

```text
C ≅ R²
```

as real vector spaces, therefore

```text
R × C ≅ R³
```

and

```text
x ↦ (x, Re(f(x)), Im(f(x)))
```

is a standard parametrized curve in `R³`.

The distinctive viewpoint of this project is the explicit interpretation of the third basis vector as the geometric direction associated with `i`, while the imaginary coefficient remains an ordinary real scalar.

## Interaction

The demos use Three.js and OrbitControls and provide:

- free 3D rotation;
- zoom in / zoom out;
- camera reset;
- an interactive `x` slider;
- live `Re(f(x))` and `Im(f(x))` values;
- modulus `|f(x)|`;
- argument `arg(f(x))`;
- a radial segment from the `x` axis to the current complex point.

## Display scaling

Some demos use display-only scale factors when one component grows much faster than another. Those factors affect only the rendering. The numerical values shown in the interface remain the actual mathematical values.
