const axios = require("axios");

const getToken= async () => {
    const res = await axios.post("http://20.207.122.201/evaluation-service/auth", {
        email: "ap8839@srmist.edu.in",
        name: "avinav panigrahi",
        rollNo: "RA2311027010167",
        accessCode: "QkbpxH",
        clientID: "a16cc1cc-3793-4a4d-9d32-4fffe67055e5",
        clientSecret: "CYWyMFdMRJstSwhQ",
    });
    console.log(res.data);
};

getToken();