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