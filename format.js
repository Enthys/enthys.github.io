const fs = require("fs")

const m = new Map();

m.set(`#skills .item {
  width: 16em;
}`,
    `#skills .item {
    width: 15em;
    text-align: center;
    border-right: 1px solid #ddd;
    padding: 0;
}

#skills .item:last-child {
    border-right: none;
}`
)

fs.readFile("index.html", 'utf8', (err, data) => {
    if (err) throw err;

    m.forEach((v, k) => {
        data = data.replace(k, v);
    });

    fs.writeFile("index.html", data, (err) => {
        if (err) throw err;
    });
});

