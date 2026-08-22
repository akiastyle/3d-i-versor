# Interactive complex-function examples

Each example visualizes a complex-valued function of a real variable using

```text
Γ(x) = (x, Re(f(x)), Im(f(x)))
```

with a strict distinction between:

```text
i = algebraic imaginary unit
k = geometric unit vector of the third axis
```

The real scalar `Im(f(x))` is rendered as signed displacement along `±k`.

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
- the instantaneous radial segment from the `x` axis to the complex point;
- the current geometric `+k / -k` direction.

## Reading the geometry

For every fixed `x`, the transverse `y-k` plane contains

```text
(Re(f(x)), Im(f(x)))
```

while the original complex value remains

```text
f(x) = Re(f(x)) + i Im(f(x))
```

The geometric coordinates are therefore

```text
Re(f(x)) e_y + Im(f(x)) k
```

not `Re(f(x)) + k Im(f(x))` as a replacement algebra.

The distance from the `x` axis is

```text
sqrt(Re(f(x))² + Im(f(x))²) = |f(x)|
```

and the angle around the `x` axis is

```text
atan2(Im(f(x)), Re(f(x))) = arg(f(x))
```

Thus modulus and phase become radius and angular position, while `i` remains the imaginary unit and `k` remains purely geometric.
