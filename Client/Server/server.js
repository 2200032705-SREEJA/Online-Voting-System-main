const Voter = require("./models/Voter");
const Candidate = require("./models/Candidate");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
res.send("Online Voting Backend Running");
});

app.post("/createVoter", async (req, res) => {
try {
const { username, password } = req.body;

```
const voter = new Voter({
  username,
  password,
});

await voter.save();

res.json({
  success: true,
  message: "Voter Registered",
});
```

} catch (err) {
res.status(500).json({
success: false,
message: err.message,
});
}
});

app.post("/login", async (req, res) => {
try {
const { username, password } = req.body;

```
const voter = await Voter.findOne({
  username,
  password,
});

if (!voter) {
  return res.json({
    success: false,
  });
}

res.json({
  success: true,
  voterObject: voter,
});
```

} catch (err) {
res.status(500).json({
success: false,
message: err.message,
});
}
});

app.get("/getCandidate", async (req, res) => {
const candidate = await Candidate.find();
res.json({ candidate });
});

app.get("/getVoterbyID/:id", async (req, res) => {
try {
const voter = await Voter.findById(req.params.id);
res.json({ voter });
} catch (err) {
res.status(500).json({ message: err.message });
}
});

app.patch("/getCandidate/:id", async (req, res) => {
try {
const candidate = await Candidate.findById(req.params.id);

```
if (!candidate) {
  return res.status(404).json({ message: "Candidate not found" });
}

candidate.votes += 1;
await candidate.save();

res.json(candidate);
```

} catch (err) {
res.status(500).json({ message: err.message });
}
});

app.patch("/updateVoter/:id", async (req, res) => {
try {
const voter = await Voter.findByIdAndUpdate(
req.params.id,
req.body,
{ new: true }
);

```
res.json(voter);
```

} catch (err) {
res.status(500).json({ message: err.message });
}
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
