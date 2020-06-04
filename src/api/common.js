/** @format */

export async function axiosRequest(method, url, data = null) {
  const token = await getSavedToken();
  return Axios({
    method: method,
    url: `${SERVER_URL}/api/${url}`,
    headers: { authorization: `Bearer ${token}` },
    data: data,
  })
    .then((res) => res)
    .catch((err) => {
      if (err.message !== "Request failed with status code 401") {
        return toast.error(err.message);
      }
      throw err;
    });
}
