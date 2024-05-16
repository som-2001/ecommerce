import { MainCard } from "@/components/MainCard";
import { Navbar } from "@/components/Navbar";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
import { Roboto_Flex } from "next/font/google";
import { decreaseCount, increaseCount, removeItem } from "@/Redux/slice";

export default function cart() {
  const { body,count,total } = useSelector((state) => state.ecom);
  const dispatch=useDispatch();

  const remove=(id)=>{
    dispatch(removeItem({id}));

  }
  const increaseItem=(id,price)=>{
    dispatch(increaseCount({id,price}));
  }
  const decreaseItem=(id,price)=>{
    dispatch(decreaseCount({id,price}));
  }
  return (
    <div className="Cart">
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={8} justifyContent="center">
          <Box
            style={{
              display: "flex",
              gap: "10%",
              justifyContent: "center",
              padding: "2% 0% 0% 10%",
            }}
          >
           
            <p className="text-2xl">Cart Details</p>
          </Box>

          {body &&
            body?.map((data, index) => (
              <>
                <div
                  className="deals-of-day"
                  style={{
                    display: "flex",
                    padding: "2%",
                    gap: "10%",
                    justifyContent: "center",
                    alignItems:"center"
                  }}
                >
                 <span onClick={(e)=>remove(data.id)}>X</span>
                 <Box style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                  <img
                    src={data.image}
                    alt=""
                    style={{ width: "70px", height: "auto", alignItems: "end" }}
                  />
                   <Box style={{display:"flex",textAlign:"center"}}>
                    <Button onClick={(e)=>decreaseItem(data.id,data.price)}>-</Button>
                    <span>{data.count}</span> 
                    <Button onClick={(e)=>increaseItem(data.id,data.price)}>+</Button>
                  </Box>

  </Box>                
                  <Box style={{width:"20%"}}>
                    <p>
                      {data.title.slice(0, 20)}
                      {data.title.length > 20 && <span>...</span>}
                    </p>
                    <p>$ {data.price}</p>
                    <Typography variant="body2" className="text-red-700">
                      <Stack direction="row" spacing={1}>
                        <Chip
                          icon={<StarIcon style={{ color: "yellowgreen" }} />}
                          label={data.rating.rate}
                        />
                      </Stack>
                    </Typography>
                  </Box>

                 
                
                </div>
                <Divider style={{width:"90%",marginLeft:"2%"}}/>
              </>
            ))}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Box style={{border:'1px solid white',padding:"10px",width:"80%",marginTop:"2%"}}>
          <p className="text-2xl mb-4">Cart totals</p>
          <Box style={{display:"flex",justifyContent:"space-between"}} className="text-xl mb-4">
          <p>Subtotal</p>
          <p >$50.00</p>
          </Box>
          <Divider/>
          <p className="mb-2">Shipping</p>
          <p className="mb-2">Flat rate: $1.00</p>
          <p className="mb-2">Shipping to 123,Bankura 722102,West Bengal</p>
          <Divider/>
          <Box style={{display:"flex",justifyContent:"space-between"}} className="text-xl mb-4 mt-4">
          <p>GST 10%</p>
          <p>$5.00</p>
          </Box>
          <Divider/>
          <Box style={{display:"flex",justifyContent:"space-between"}} className="text-2xl mb-4 mt-4">
          <p>Total</p>
          <p>${total}</p>
          </Box>
          <Button variant="contained">PROCEED TO CHECKOUT</Button>
          </Box>

        </Grid>
      </Grid>
    </div>
  );
}
