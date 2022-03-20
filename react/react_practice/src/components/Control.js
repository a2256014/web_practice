function Control(probs) {

    return (
        <ul>
            <li><a href='/create' onClick={function (e) {
                e.preventDefault();
                probs.onChangeMode('create');
            }}>create</a></li>
            <li><a href='/update' onClick={function (e) {
                e.preventDefault();
                probs.onChangeMode('update');
            }}>update</a></li>
            <li><button value='delete' onClick={function (e) {
                e.preventDefault();
                probs.onChangeMode('delete');
            }}>delete</button></li>
        </ul>
    );
}

export default Control;