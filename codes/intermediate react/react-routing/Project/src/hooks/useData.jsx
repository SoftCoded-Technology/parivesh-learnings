import { useEffect, useState } from "react";
import apiClient from "../sevices/api-client";
import { CanceledError } from "axios";

const useData = (endpoint, params = {}, deps = []) => {
  const [IsLoading, setIsLoading] = useState(false);
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");
  // console.log("in useData", params)

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    apiClient
      .get(endpoint, { signal: controller.signal, params })
      .then((res) => {
        // console.log("the data is ",res.data.results);
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, deps); // Dependencies should trigger re-fetch

  return { Data, Error, IsLoading };
};

export default useData;
