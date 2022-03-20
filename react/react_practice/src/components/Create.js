function Create(probs) {
    return (
        <article>
            <h2>Create</h2>
            <form action="/create_process" method="post"
                onSubmit={function (e) {
                    e.preventDefault();
                    probs.onSubmit(e.target[0].value, e.target[1].value);
                }}>
                <p><input type='text' name='title' placeholder='title'></input></p>
                <p><textarea name="desc" placeholder="descript"></textarea></p>
                <p>
                    <input type={'submit'}></input>
                </p>
            </form>
        </article>
    );
}

export default Create;