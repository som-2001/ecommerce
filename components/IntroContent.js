import { Grid, Divider, Box, Button } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Height } from "@mui/icons-material";

export const IntroContent = () => {
  return (
    <Box>
        <Grid container justifyContent="center" alignContent="center" className="p-2" style={{backgroundImage:'url(../images/girl1.png)',backgroundRepeat:"no-repeat",backgroundSize:"auto",filter:'brightness(0.7)',height:"29rem"}}>
           
        </Grid>
        <Box style={{position:"absolute",top:"33%"}}>
        <p className="lg:text-5xl text-3xl text-white ml-9 w-4/5 font-semibold" style={{fontFamily:"auto"}}  >Exclusive Summer Sale: Dive Into Unbeatable Deals!</p>
         <Button variant="outlined" className="button lg:ml-72 md:ml-86 sm:ml-56 ml-14 mt-4 text-white bg-purple-700" style={{borderRadius:"20px",marginLeft:"20%"}}>Shop now</Button>
        </Box>
      <Grid container spacing={2} style={{marginTop:"0%"}}>
        <Grid item xs={12} sm={4}>
          <Grid container justifyContent="center" alignItems="center">
            <LocalShippingIcon className="text-4xl text-purple-600 sm:text-2xl" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="ml-2 text-lg sm:text-base">Free Shipping</p>
              <p className="ml-2 text-purple-600 text-sm">
                On All Orders over 200
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container justifyContent="center" alignItems="center">
            <SupportAgentIcon className="text-purple-600 sm:text-xl none" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="ml-2 text-lg sm:text-base">Dedicated Support</p>
              <p className="ml-2 text-purple-600 text-sm">
                Quick response 24/7
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container justifyContent="center" alignItems="center">
            <AttachMoneyIcon className="text-purple-600 sm:text-xl xs:none" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="ml-2 text-lg sm:text-base">Money Back Guarantee</p>
              <p className="ml-2 text-purple-600 text-sm">
                Worry-free shopping
              </p>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
