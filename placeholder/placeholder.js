// console.log('working array');

const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((data) => showData(data))
        .catch((error) => {
            console.log(error);
        });
};


const showData = (data) => {
    // console.log(data.slice(0, 5));
    for (let singleData of data.slice(0, 20)) {
        // console.log(singleData);
        const container = document.getElementById("post-info")
        const div = document.createElement("div");
        div.innerHTML = `
        <h1 class="text-center text-2xl">${singleData.title}</h1>
        `;
        container.append(div);
    }
};

loadData();