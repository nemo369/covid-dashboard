import { useState, useEffect } from 'react';
export default function useInfo() {
    // const url = `https://static-cdn.workiz.com/various/covid-may-jul.json`;
    const url = `https://nifty-noyce-ac626c.netlify.app/data/covid-may-jul.json`;
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchInfo() {
      setLoading(true);
      setError();
      const Info = await fetch(url)
        .then(res => res.json())
        .catch(err => {
          setError(err);
        });
      setInfo(Info);
      setLoading(false);
    }
    fetchInfo();
  }, [url]);
  return {
    info,
    loading,
    error,
  };
}