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
| [`negative-roots.html`](negative-roots.html) | `z^n = x`, `x ≤ 0` | `n` radial root branches with a selectable transverse `y-k` section |

## Shared viewer

All files use [`complex-demo.js`](complex-demo.js), which provides the shared Three.js rendering structure.

The standard single-function examples provide:

- free 3D rotation;
- zoom and reset;
- an interactive `x` slider;
- `Re(f(x))` and `Im(f(x))`;
- complex modulus `|f(x)|`;
- complex argument `arg(f(x))`;
- the instantaneous radial segment from the `x` axis to the complex point;
- the current geometric `+k / -k` direction.

The negative-roots example extends the same viewer module with multiple simultaneous branches and an interactive transverse `y-k` plane.

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

## Negative real n-th roots

For

```text
z^n = x
x ≤ 0
```

and `n ≥ 2`, define

```text
rho(x) = (-x)^(1/n)
theta_j = ((2j+1)pi)/n
j = 0,...,n-1
```

The roots are

```text
z_j(x) = rho(x) exp(i theta_j)
```

and their 3D branches are

```text
Gamma_j(x) = (x, rho(x) cos(theta_j), rho(x) sin(theta_j))
```

For each fixed negative `x`, all `n` roots lie on a circle in the transverse `y-k` plane with radius

```text
|z_j| = rho(x)
```

and arguments

```text
arg(z_j) = theta_j
```

The demo provides `n = 2..12` and a second slider that moves the transverse plane along the `x` axis. At `x = 0`, all branches meet at `z = 0`; the complex argument is undefined at that point.
