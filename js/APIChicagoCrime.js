export async function fetchDataChicago () {
    try {
      const response = await $.ajax({
        url: "https://data.cityofchicago.org/resource/ijzp-q8t2.json",
        type: "GET",
        data: {
          "$limit": 5000,
          "$$app_token": "3cJyRnxM0CrRL3CRjJONj4Xez"
        }
      });
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
  