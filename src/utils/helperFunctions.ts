import axios from "axios";

export const getUserData = async () => {
  const userDataResponse = await axios.get("https://randomuser.me/api/");
  console.log(
    "🚀 ~ file: helperFunctions.ts:5 ~ getUserData ~ userDataResponse:",
    userDataResponse
  );

  return await userDataResponse?.data?.results?.[0];
};
