function Subject(probs) {
    return (
        <header>
            <a href="/content/" onClick={function (e) {
                e.preventDefault();
                probs.onChangeMode('welcome');
            }}>
                <h2>{probs.title}</h2>
            </a>
        </header>
    );
}

export default Subject;