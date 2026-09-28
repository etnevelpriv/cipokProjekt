const Fejlec = function () {
    return (
        <header>
            <h1>Ikonikus Cipők</h1>
        </header>
    );
}
const Lablec = function () {
    return (
        <footer>
            <p>Az oldalt készítette: Rasztovits Levente, készítés dátuma: 2025.09.23.</p>
        </footer>
    );
}
export const App = function () {
    return (
        <>
        <Fejlec></Fejlec>
        <Lablec></Lablec>
        </>
    )
}