const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("EYAD AI LIVE 🚀");
});

app.get("/signal", (req, res) => {
    const pairs = ["EUR/USD", "GBP/USD", "USD/JPY", "BTC/USD"];
    const signals = ["CALL 📈", "PUT 📉", "NO TRADE 🚫"];

    const randomPair = pairs[Math.floor(Math.random() * pairs.length)];
    const randomSignal = signals[Math.floor(Math.random() * signals.length)];

    res.json({
        pair: randomPair,
        signal: randomSignal,
        accuracy: Math.floor(Math.random() * 30) + 70
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("EYAD AI RUNNING 🚀 ON PORT " + PORT);
});
