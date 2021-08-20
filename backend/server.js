import express from "express";

const app = express();

// 미들웨어 세팅

// 디비 연결

// 패스포트 설정

// 라우팅
app.get("/", (req, res) => {
	res.send("hello backend");
});
