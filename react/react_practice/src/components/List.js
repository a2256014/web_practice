function Setlist(probs) {
    let lists = [];
    let data = probs.data;
    let i = 0;
    while (i < data.length) {
        lists.push(<li key={data[i].id}>
            <a href={"/content/" + data[i].id}>
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