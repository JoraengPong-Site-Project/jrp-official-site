import express from "express";

const app = express();

// 미들웨어 세팅

// 디비 연결

// 패스포트 설정

// 라우팅
app.get("/", (req, res) => {
	res.send("hello backend");
});

// 서버 리스닝

const PORT = process.env.PORT || 5000;

const handleListening = () => {
	console.log(`✅ Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
