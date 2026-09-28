# React alkalmazások fejlesztése Frontend óra | 3. alkalom

## Feladat: Ikonikus Cipők

---

### 1. feladat

Hozz létre egy új **Vite-es React alkalmazást** `Cipok` névvel.

Az `App.tsx` fájlban hozd létre az alábbi komponenseket:

#### Fejlec komponens

**Tartalma:**

```jsx
<h1>Ikonikus Cipők</h1>
```

#### Lábléc komponens

**Tartalma:**

Készíts egy komponenst, amiben a neved (félkövéren) és a készítés dátuma szerepel (félkövéren)!
A dátumot egy javascript-es függvény szolgáltassa.

```jsx
<p>Az oldalt készítette: Saját neved, készítés dátuma: 2025.09.23.</p>
```

---

### 2. feladat

#### ShoeCard komponens

Készíts egy `ShoeCard.tsx` komponenst, amely props-on keresztül fogadja az alábbi adatokat **egyenként**:

- `model`: szöveges adat
- `brand`: szöveges adat
- `isLimitedEdition`: logikai adat
- `releaseYear`: szám tipusú adat
- `sports`: szöveges tömb *(milyen sporthoz/tevékenységhez kapcsolódik)*

A komponens írja ki:

- a cipő modelljét
- a márkáját
- a megjelenési évét
- a sportokat (vesszővel elválasztva)

A `props` típusát egy `ShoeCardProps` nevű `interface` segítségével add meg!

---

### 3. feladat

#### Komponens meghívása konkrét értékekkel

Az `App.tsx` fájlban hívd meg többször a `ShoeCard` komponenst, és adj át neki konkrét értékeket props-ként:

| Modell                 | Márka    | Limitált? | Megjelenés éve | Kapcsolódó sportok         |
|------------------------|----------|-----------|----------------|-----------------------------|
| Air Jordan 1           | Nike     | Igen      | 1985           | kosárlabda                  |
| Stan Smith             | Adidas   | Nem       | 1971           | tenisz                      |
| Chuck Taylor All Star  | Converse | Nem       | 1917           | kosárlabda, divat           |
| Yeezy Boost 350        | Adidas   | Igen      | 2015           | lifestyle                   |
| Air Max 1              | Nike     | Nem       | 1987           | futás, streetwear           |
| Puma Suede             | Puma     | Nem       | 1968           | breaktánc, divat            |
| Reebok Pump            | Reebok   | Igen      | 1989           | kosárlabda                  |

---

### 4. feladat

#### Inline stílus

A `ShoeCard` komponensben alkalmazz **inline stílust**:

- Ha `isLimitedEdition === true`, akkor:
  - háttér: `#FFD700`
  - szöveg: `#000`
- Ha nem limitált, akkor:
  - háttér: `#f2f2f2`
  - szöveg: `#333`

A logikához használj **ternary (?:)** operátort!

---

### 5. feladat

#### Feltételes szövegmegjelenítés

A komponens jelenítsen meg egy külön sorban:

- Ha limitált kiadás: `Ez egy limitált kiadású modell.`
- Ha nem: `Ez egy általánosan elérhető modell.`

Ehhez is használj **ternary operátort**!

---

### 6. feladat

#### Külső CSS fájl használata

- Hozz létre egy `cipostilus.css` nevű fájlt, és **importáld a `ShoeCard` komponensbe**.
- Készíts benne:

  - Egy `.kiemelt` class-t, amely:
    - nagyobb betűméretet
    - félkövér betűtípust alkalmaz

  - Egy `#cipokartya` id-t, amely:
    - kerettel rendelkezik
    - paddinget kap
    - kis árnyékkal van ellátva

Használd ezeket a stílusokat a `ShoeCard` komponensben!

---

### 7. feladat

#### Szerkezet javítása, komponensek kombinálása

Az `App.tsx` komponensbe:

- importáld és használd fel:
  - a `Fejlec` komponenst
  - a `ShoeCard` komponenst
  - a `Lábléc` komponenst

Az elemek legyenek egy `<main>` tagbe rendezve, és legyen közöttük minimális margó.

---
