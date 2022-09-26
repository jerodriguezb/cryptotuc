import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url, params) => {
  const [dataFetch, setDataFetch] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const getData = async () => {
    const { data } = await axios(url, { params });

    setDataFetch({
      loading: false,
      error: null,
      data,
    });
  };

  useEffect(() => {
    getData();
  }, [url]);

  return dataFetch;
};

export default useFetch;
