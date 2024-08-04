import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBannerData } from "../utils/bannerSlice";
import { GEMINI_API_KEY, UNSPLASH_API_KEY } from "../utils/constants";



const useFetchDataBanner = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const parseBannerText = (text: string) => {
    const parts = text.split(", ");
    const result = {
      title: parts[0].replace("Title: ", ""),
      description: parts[1].replace("Description: ", ""),
      cta: parts[2].replace("Call to Action: ", ""),
    };
    return result;
  };

  const fetchDataBanner = async (inputValue: string) => {
    setLoading(true);

    const gptQuery = `Act as Banner Bot, suggest the Title, Description, Call to Action for the query: ${inputValue}. Only give a single result, comma-separated like the example result given ahead. Example Prompt: Banner for Gym Result: Title: Unleash Your Strength, Description: Transform Your Body with Us, Call to Action: Discover Your Potential`;

    try {
      const gptResponse = await axios({
        url: `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
        method: "post",
        data: {
          contents: [{ role: "user", parts: [{ text: `${gptQuery}` }] }],
        },
      });
      const bannerResult = gptResponse.data.candidates[0].content.parts[0].text;

      const { title, description, cta } = parseBannerText(bannerResult);

      const unsplashResponse = await axios({
        url: `https://api.unsplash.com/search/photos`,
        method: "get",
        params: {
          query: inputValue,
          per_page: 8,
          client_id: UNSPLASH_API_KEY,
        },
      });

      const images = unsplashResponse.data.results.map(
        (result: any) => result.urls.small
      );

      dispatch(setBannerData({ title, description, cta, images }));
    } catch (error) {
      console.error("Error fetching data from the API:", error);
    } finally {
      setLoading(false);
    }
  };

  return { fetchDataBanner, loading };
};

export default useFetchDataBanner;
