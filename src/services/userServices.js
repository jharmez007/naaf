import Api from "../api";

export const registerUser = async (body) => {
  try {
    const response = await Api({
      method: "post",
      url: `/user/register`,
      data: body,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return { data: response?.data, status: response?.status };
  } catch (error) {
    return { message: error?.response?.data?.message ?? error?.message };
  }
};
