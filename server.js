const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("EYAD AI LIVE 🚀");
});

app.get("/signal", (req, res) => {
    const signals = ["CALL 📈", "PUT 📉", "NO TRADE 🚫"];
    const random = signals[Math.floor(Math.random() * signals.length)];

    res.json({
        pair: "EUR/USD",
        signal: random,
        accuracy: Math.floor(Math.random() * 25) + 70
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("RUNNING ON PORT " + PORT);
});
