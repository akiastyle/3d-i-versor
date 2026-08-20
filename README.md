# 3d-i-versor

Rappresentazione tridimensionale di una funzione complessa di variabile reale, interpretando `i` come **direzione/versore geometrico** e il coefficiente della parte immaginaria come **distanza lungo quella direzione**.

## Idea

Per una funzione

```text
f(x) = u(x) + i v(x)
```

si costruisce la curva 3D

```text
Γ(x) = (x, u(x), v(x))
```

con:

- asse `x`: variabile indipendente;
- asse `y`: parte reale `u(x) = Re(f(x))`;
- asse `z`: coefficiente reale `v(x) = Im(f(x))` misurato lungo la direzione associata a `i`.

In questa lettura `i` non è una magnitudine: è il **versore della terza direzione**.

Formalmente, usando una base di R³:

```text
e_x = (1,0,0)
e_y = (0,1,0)
e_i = (0,0,1)
```

la curva può essere scritta come

```text
Γ(x) = x e_x + u(x) e_y + v(x) e_i
```

oppure

```text
Γ(x) = (x, u(x), 0) + v(x)e_i
```

Il segno di `v(x)` determina l'orientamento `+i` o `-i`; il valore assoluto `|v(x)|` è la distanza dal piano reale `z = 0`.

## Esempio usato

```text
f(x) = x² + i sin(x)
```

quindi

```text
u(x) = x²
v(x) = sin(x)
Γ(x) = (x, x², sin(x))
```

La rappresentazione permette di vedere contemporaneamente due grafici distinti:

```text
G_R(x) = (x, x², 0)
G_I(x) = (x, 0, sin(x))
```

La curva completa combina i due contributi mantenendoli geometricamente separati.

## Interpretazione di i

Per un termine come

```text
5i = 5 · i
```

la lettura geometrica adottata è:

- `5`: magnitudine reale;
- `i`: direzione;
- `-5i`: stessa magnitudine, direzione opposta.

Perciò

```text
v(x)i = |v(x)| · direzione(+i oppure -i)
```

Questa è un'interpretazione geometrica della decomposizione standard in parte reale e parte immaginaria; non modifica l'algebra dei numeri complessi.

## Informazioni leggibili dal grafico

Per ogni valore di `x`, il punto della funzione è

```text
F(x) = (x, u(x), v(x))
```

mentre il punto corrispondente sull'asse di ingresso è

```text
P(x) = (x, 0, 0)
```

La distanza tra i due è

```text
|F(x)-P(x)| = sqrt(u(x)² + v(x)²) = |f(x)|
```

quindi il **modulo del numero complesso** diventa una distanza geometrica nel piano ortogonale all'asse `x`.

L'angolo nello stesso piano è

```text
arg(f(x)) = atan2(v(x), u(x))
```

quindi la **fase/argomento** diventa un orientamento geometrico.

Per l'esempio:

```text
|f(x)| = sqrt(x⁴ + sin²(x))
arg(f(x)) = atan2(sin(x), x²)
```

Inoltre:

- `sin(x) = 0` → la curva ricade sul piano reale;
- `sin(x) > 0` → spostamento nella direzione `+i`;
- `sin(x) < 0` → spostamento nella direzione `-i`;
- la periodicità di `sin(x)` resta visibile senza discretizzarla in `-1/0/+1`.

## Relazione con la matematica standard

Per

```text
f : R → C
```

vale l'identificazione

```text
R × C ≅ R³
```

perché `C ≅ R²` come spazio vettoriale reale.

Quindi

```text
x ↦ (x, Re(f(x)), Im(f(x)))
```

è una curva parametrica in R³. La particolarità di questa visualizzazione è l'interpretazione esplicita della terza base `e_i` come **versore immaginario**, mentre il coefficiente `Im(f(x))` resta una quantità reale.

Questa rappresentazione non è una nuova definizione di `C`: è un modo geometrico di visualizzare il grafico di una funzione complessa di variabile reale.

## Demo interattiva

Aprire:

```text
index.html
```

La demo usa Three.js e OrbitControls e consente:

- rotazione 3D;
- zoom;
- reset della camera;
- esplorazione di `x` nell'intervallo `[-4π, 4π]`;
- visualizzazione simultanea della curva reale di base e della curva complessa;
- lettura numerica di `x`, `x²`, `sin(x)`, direzione `+i/-i`, `|sin(x)|`.

### Nota sulle scale grafiche

Per rendere leggibile un intervallo ampio, la demo comprime graficamente `x²` e amplifica la direzione `i`. I valori numerici mostrati restano quelli matematici reali.
