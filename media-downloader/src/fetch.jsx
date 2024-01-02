export const downloadVideo = async (URL) => {
  const url = `https://social-media-video-downloader.p.rapidapi.com/smvd/get/all?url=${URL}&filename=Test%20video`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "393b7f4eaemshf2c404f9a2898f7p18fd2bjsn3e7245a2aba4",
      "X-RapidAPI-Host": "social-media-video-downloader.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Assuming the response is JSON
    return result;
  } catch (error) {
    console.error(error);
    // Handle errors appropriately, e.g., throw an error or return an empty array
    return [];
  }
};
