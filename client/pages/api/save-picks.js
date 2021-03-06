import axios from "axios";

export default (req, res) => {
  const { email, bigBikePicks, week, totalPoints } = req.body;
  const userPick = JSON.stringify({
    week,
    email,
    bigBikePicks,
    totalPoints,
  });

  return axios
    .post(`${process.env.API_URL}/save-picks`, userPick, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      res.status(200).json(response.data);
      return response.data;
    })
    .catch((error) => console.error("/get-user error", error));
};
