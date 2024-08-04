import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import useFetchDataBanner from "./hooks/useFetchDataBanner";

const LeftNav: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { fetchDataBanner, loading } = useFetchDataBanner();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchDataBanner(inputValue);
  };

  return (
    <div className="fixed top-0 left-0 w-1/3 h-screen bg-gray-800 p-5 flex flex-col space-y-5">
      <h2 className="text-3xl font-bold text-white">Ad Banner Generator</h2>
      <h4 className="text-xl text-white underline">
        An AI Powered Generation Tool
      </h4>
      <form onSubmit={handleSubmit} className="space-y-5">
        <TextField
          label="Generate Banner"
          variant="outlined"
          fullWidth
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{ style: { color: "white" } }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Banner"}
        </Button>
      </form>
    </div>
  );
};

export default LeftNav;
