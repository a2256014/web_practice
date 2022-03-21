import { useState } from "react";

function Update(probs) {
    let [u_title, setu_title] = useState(probs.data.titles)
    let [u_desc, setu_desc] = useState(probs.data.desc)
    var id = probs.data.id
    return (
        <article>
            <h2>Update</h2>
            <form action="/create_process" method="post"
                onSubmit={function (e) {
                    e.preventDefault();
                    probs.onSubmit(
                        id,
                        e.target.title.value,
                        e.target.desc.value
                    );
                }}>
                <input type='hidden' name="id" value={probs.data.id}>

                </input>
                <p><input type='text'
                    name='title'
                    placeholder='title'
                    value={u_title}
                    onChange={function (e) {
                        setu_title(e.target.value);
                    }}
                ></input>
                </p>
                <p><textarea
                    name="desc"
                    placeholder="descript"
                    value={u_desc}
                    onChange={function (e) {
                        setu_desc(e.target.value);
                    }}
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