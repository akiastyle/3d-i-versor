# Interactive complex-function examples

Each example visualizes a complex-valued function of a real variable using

```text
Γ(x) = (x, Re(f(x)), Im(f(x)))
```

with the imaginary unit `i` interpreted as the unit direction of the third axis and `Im(f(x))` as the real scalar coefficient along that direction.

## Examples

| File | Function | 3D behaviour |
|---|---|---|
| [`helix-positive.html`](helix-positive.html) | `f(x) = e^(ix)` | Unit-radius helix with linear positive phase |
| [`damped-helix.html`](damped-helix.html) | `f(x) = e^((-0.15+i)x)` | Rotating helix whose radius decays exponentially |
| [`expanding-helix.html`](expanding-helix.html) | `f(x) = x e^(ix)` | Helix whose radius grows linearly with `x` |
| [`chirp-helix.html`](chirp-helix.html) | `f(x) = e^(i x²)` | Constant radius, but angular velocity increases with `x` |
| [`variable-radius.html`](variable-radius.html) | `f(x) = (2+sin x)e^(ix)` | Pulsating helix with modulus between 1 and 3 |
| [`rational.html`](rational.html) | `f(x) = 1/(1+i x)` | Curve whose real and imaginary components decay toward the x-axis |

## Shared viewer

All files use [`complex-demo.js`](complex-demo.js), which provides:

- free 3D rotation;
- zoom and reset;
- an interactive `x` slider;
- `Re(f(x))` and `Im(f(x))`;
- complex modulus `|f(x)|`;
- complex argument `arg(f(x))`;
- the instantaneous radial segment from the `x` axis to the complex point.

## Reading the geometry

For every fixed `x`, the transverse `(Re, Im)` plane contains the complex value itself:

```text
f(x) = Re(f(x)) + i Im(f(x))
```

The distance from the `x` axis is

```text
sqrt(Re(f(x))² + Im(f(x))²) = |f(x)|
```

and the angle around the `x` axis is

```text
atan2(Im(f(x)), Re(f(x))) = arg(f(x))
```

This makes modulus and phase directly readable as radius and angular position of the 3D curve.
