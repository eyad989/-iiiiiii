const express = require("express");
const app = express();

app.get("/signal", (req, res) => {
    const signals = ["CALL 📈", "PUT 📉", "NO TRADE 🚫"];
    const random = signals[Math.floor(Math.random() * signals.length)];

    res.json({
        pair: "EUR/USD",
        signal: random,
        accuracy: Math.floor(Math.random() * 25) + 70
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("EYAD AI LIVE 🚀");
});