import axios from "axios";

export const getUserData = async () => {
  const userDataResponse = await axios.get("https://randomuser.me/api/");

  return await userDataResponse?.data?.results?.[0];
};
