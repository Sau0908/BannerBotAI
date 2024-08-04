export const GEMINI_API_KEY= process.env.NEXT_PUBLIC_GEMINI_API_KEY; 
export const UNSPLASH_API_KEY = process.env.NEXT_PUBLIC_UNSPLASH_API_KEY; 

export const backgroundImages: string[] = [
    "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png",
    "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png",
    "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/15/square.png",
    "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/9/square.png"
  ];
  
  export const stylesByIndex = [
    {
      containerClasses: "p-5 bg-cover bg-center rounded-lg shadow-lg max-w-md mx-auto overflow-hidden",
      height: "600px",
      width:"100%",
      textColor: "text-black",
      buttonColor: "bg-black",
      buttonText: "text-white",
      buttonHover: "hover:bg-gray-800",
      imagePosition: "absolute bottom-[-1.8rem] right-[-11.7rem]",
      imageSize: "w-[25rem] h-[25rem] rounded-full border-6 border-white",
      buttonPosition: "self-start ",
      textAlign: "text-center mt-10",
      headingMargin: "mb-2",
      headingTextWrap: "text-wrap",
      paragraphMargin: "mb-6",
      btnpadding: "w-1/2 py-2 px-2  rounded",
    },
    {
      containerClasses: "p-5 bg-cover bg-center rounded-lg shadow-lg max-w-md mx-auto overflow-hidden",
      height: "600px",
      width:"100%",
      textColor: "text-white",
      buttonColor: "",
      buttonText: "text-black font-semibold",
      buttonHover: "hover:bg-gray-800",
      imagePosition: "absolute bottom-[6rem] right-[0rem]",
      imageSize: "w-[25rem] h-[15rem] border-4 border-white",
      buttonPosition: "self-start mb-8 ",
      textAlign: "text-center ",
      headingMargin: "mb-8",
      headingTextWrap: "text-wrap",
      paragraphMargin: "mb-2 ",
      btnpadding: "w-1/2 ",
    },
    {
      containerClasses: "p-5 bg-cover bg-center rounded-lg shadow-lg max-w-md mx-auto overflow-hidden m-4",
        height: "600px",
      width:"100%",
      textColor: "text-black",
      buttonColor: "bg-blue-400",
      buttonText: "text-black",
      buttonHover: "hover:bg-gray-800",
      imagePosition: "absolute bottom-[2.8rem] left-[20%] transform -translate-x-1/2 mr-20",
      imageSize: "w-[17rem] h-[17rem] rounded-full border-4 border-white",
      buttonPosition: "self-end mt-4 w-1/3",
      textAlign: "text-center mt-4",
      headingMargin: "mb-2",
      headingTextWrap: "",
      paragraphMargin: "mb-2 mt-14",
      btnpadding: "w-1/2 py-2 px-2 rounded",

    },
    {
      containerClasses: "p-5 bg-cover bg-center rounded-lg shadow-lg max-w-md mx-auto overflow-hidden m-4",
      height: "600px",
      width:"100%",
      textColor: "text-black",
      buttonColor: "bg-white",
      buttonText: "text-blue-400",
      buttonHover: "hover:bg-gray-800",
      imagePosition: "absolute bottom-[11rem] right-[1rem]",
      imageSize: "w-[18rem] h-[18rem] rounded-full border-4 border-white",
      buttonPosition: "self-start w-1/3",
      textAlign: "text-center mt-2",
      headingMargin: "mb-1",
      headingTextWrap: "text-wrap",
      paragraphMargin: "mb-6 mr-60",
      btnpadding: "w-1/2 py-2 px-2 rounded",
    },
  ];
  

