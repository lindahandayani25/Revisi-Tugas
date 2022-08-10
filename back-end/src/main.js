import express from "express";

const app = express();

app.use(express.json());

const port = 7000;

app.get("/", (req, res) => {
    res.send({nama: "Linda Handayani"});
});

app.post("/create", (req, res) => {
    res.send({nama: req.body});
});

app.get("/makanan", (req, res) => {
    res.send([
        {
            id: 1,
            nama: "Mie Sedap",
            rasa: "Ayam",
        },
        {
            id: 2,
            nama: "Nasi Goreng",
            rasa: "Nasi Goreng",
        }
    ]);
}); 

app.get("/minuman", (req, res) => {
    res.send([
        {
            id: 1,
            nama: "Nutri Sari",
            rasa: "Jeruk Nipis",
        },
        {
            id: 2,
            nama: "Marimas",
            rasa: "Mangga",
        },
    ]);
}); 


app.listen(port, () => {
    console.log(`Aplikasi nya jalan di port ${port}`);
});


    