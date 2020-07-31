function createPost() {
    const URL = 'http://127.0.0.1:9090/admin/createPost';
    const data = {
        title    : document.getElementById('title').value,
        author   : document.getElementById('author').value,
        abstract : document.getElementById('abstract').value,
        content  : document.getElementById('content').value
    }
    console.log(data.content);
    const Params = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: data,
        method: "POST"
    }
    console.log(data.json());
    fetch(URL, Params)
        .then(data => { return data.json() })
        .then(res => { console.log(res) })
        .catch(error => { console.log(error) });
}