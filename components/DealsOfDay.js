import { Card, CardContent, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { MainCard } from "./MainCard";

export const DealsOfDay = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?sort=desc").then((res) => {
      setResult(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="deals-of-day">
      <h1 className="text-center text-4xl mt-4 mb-4">Deals Of the Day</h1>
      <Grid container className="lg:p-28 pl-1 sm:p-10 md:p-24" spacing={2} textAlign="-webkit-center">
        {result &&
          result?.slice(0, 6)?.map((data, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <MainCard key={index} item={data} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};
