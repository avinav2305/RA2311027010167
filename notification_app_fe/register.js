import axios from "axios";
const register = async () => {
    const res = await axios.post("http://20.207.122.201/evaluation-service/register", {
        email : "ap8839@srmist.edu.in",
        name : "AVINAV PANIGRAHI",
        mobileNo : "7327916970",
        githubUsername : "avinav2305",
        rollNo : "RA2311027010167",
        accessCode : "QkbpxH"
    });
    console.log(res.data);
}
register();