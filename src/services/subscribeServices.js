import Api from "../api";

export const createSubscriber = async (body) => {
  try {
    const response = await Api({
      method: "post",
      url: `/subscribe`,
      data: body,
    });
    return { data: response?.data, status: response?.status };
  } catch (error) {
    return {
      message: error?.response?.data?.message ?? error.message,
    };
  }
};
