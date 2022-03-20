function Bodycontents(probs) {
    return (
        <body>
            <h1>{probs._title}</h1>
            <div>
                {probs._desc}
            </div>
        </body>
    );
}

export default Bodycontents;

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

function Setlist(probs) {
    let lists = [];
    let data = probs.data;
    let i = 0;
    while (i < data.length) {
        lists.push(<li key={data[i].id}>
            <a href={"/content/" + data[i].id}
                data-id={data[i].id}
                onClick={function (e) {
                    e.preventDefault();
                    probs.onChangePage(e.target.dataset.id);
                    probs.onChangeMode('read');
                }}>
                {data[i].titles}
            </a>
            {data[i].desc}
        </li>);
        i = i + 1;
    }
    return (
        <div>
            {lists}
        </div>
    );
}

export default Setlist;

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


import { useState } from "react";

function Update(probs) {
    let [u_title, setu_title] = useState(probs.data.titles)
    return (
        <article>
            <h2>Update</h2>
            <form action="/create_process" method="post"
                onSubmit={function (e) {
                    e.preventDefault();
                    probs.onSubmit(e.target[0].value, e.target[1].value);
                }}>
                <p><input type='text'
                    name='title'
                    placeholder='title'
                    value={u_title}
                    onChange={function (e) {
                        debugger;
                        setu_title(u_title = e.target.value);
                    }}
                ></input>
                </p>
                <p><textarea
                    name="desc"
                    placeholder="descript"
                ></textarea>
                </p>
                <p>
                    <input type={'submit'}></input>
                </p>
            </form>
        </article>
    );
}

export default Update;
