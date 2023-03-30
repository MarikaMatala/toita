const result = document.querySelector(".result");
const baseUrl = `${window.location.origin}/api`;
const fetchRecords = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/records?user=onni`);

        const records = data.map((record) => {
            return `<li><div>${record.name}</div><div>${record.artist}</div><div>${record.length}</div><div>${record.price}</div></li>`;
        });

        result.innerHTML = records.join("");
    } catch (error) {
        console.log(error);
        result.innerHTML = `<div class="alert alert-danger">Could not fetch data</div>`;
    }
};

fetchRecords();

function handleSubmit(event) {
    event.preventDefault();
    const e = document.getElementById("error");
    e.style.display = "none";

    const user = document.getElementById("user").value;

    const data = {
        name: document.getElementById("name").value,
        artist: document.getElementById("artist").value,
        length: document.getElementById("length").value,
        price: document.getElementById("price").value,
    };

    axios
        .post(`/api/records?user=${user}`, data)
        .then((result) => {
            console.log(result.data);
            event.target.reset();
            fetchRecords();
        })
        .catch((error) => {
            console.log(error);
            e.style.display = "block";
        });
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
