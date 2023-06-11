import { useState, useEffect } from "react";
import axios from "axios";
import { IDataList,IDataDetails } from "../type/type";

// type Data =IDataList;
type ArrayData = IDataList[];
  
  interface IUseFetch {
    data: ArrayData ;
    data_details:IDataDetails ;
    isLoading: boolean;
    error: string | null;
    refetch: () => void;
  }
const useFetch = (params:any,url:string):IUseFetch => {
  const [data, setData] = useState< ArrayData>([])
  const [data_details, setData_details] = useState<IDataDetails>({} as IDataDetails); 

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string|null>(null);


  const options = {
    method: 'GET',
    url: url,
    params:params,
    headers: {
      'X-RapidAPI-Key': 'e3838ecf53msh9b0d4d344119499p15bee0jsn742dbc3c8283',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      if ('hits' in response.data) {
        setData(response.data.hits);


      } else {
        setData_details(response.data ??{});
      }
      
      setIsLoading(false);
    } catch (error) {
      setError(error as string);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.page?.toString()]);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data_details,data, isLoading, error, refetch };
};

export default useFetch;