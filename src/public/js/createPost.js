function createPost() {
    const URL = 'http://127.0.0.1:9090/admin/createPost';
    const data = {
        title    : document.getElementById('title').value,
        author   : document.getElementById('author').value,
        abstract : document.getElementById('abstract').value,
        content  : document.getElementById('content').value
    }
    const Params = {
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data),
        method: "POST"
    }
    console.log(data);
    fetch(URL, Params)
        .then(data => { return data })
        .then(res => { console.log(res) })
        .catch(error => { console.log(error) });
}