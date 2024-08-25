import "./styles.css";
import { motion } from "framer-motion";
import { Box, Grid, IconButton, Link, Typography } from "@mui/material";
import Insta from "../../assets/Social/instagram.png";
import fb from "../../assets/Social/facebook.png";
import x from "../../assets/Social/twitter.png";
import { Handshake } from "@mui/icons-material";
import teamMember1 from "../../assets/TeamMembers/pavan.jpg";
import teamMember2 from "../../assets/TeamMembers/vinay.jpg";
import teamMember3 from "../../assets/TeamMembers/Prathyusha.jpg";
import teamMember4 from "../../assets/TeamMembers/indu.jpg";
import teamMember5 from "../../assets/TeamMembers/rishitha.jpg";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const TeamMobile = () => {
  return (
    <div style={{ marginBottom: "150px" }}>
      <Grid container className="flex flex-col items-center">
        <Handshake
          sx={{ fontSize: 35 }}
          className="bg-iconBgColor text-iconColor h-[70px] w-[70px] p-[14px] rounded-full "
        />
        <div className="my-5 text-center">
          <Typography
            className="text-[15px] text-[#D0D0D0] font-poppins"
            sx={{ letterSpacing: "3px", textTransform: "uppercase" }}
          >
            <span className="text-[#5956E8] mx-1">//</span>
            05 . Our Team
          </Typography>
          <Typography
            variant="h4"
            className="text-2xl sm:text-3xl md:text-xl lg:text-4xl text-headColor px-5 md:px-0 text-center font-poppins font-normal mt-4"
          >
            Meet Our Team Experts
          </Typography>
        </div>
      </Grid>

      {/* Team Member 1 */}
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div
          className="splash"
          style={{
            background:
              "linear-gradient(306deg, hsl(340, 100%, 50%), hsl(10, 100%, 50%))",
          }}
        />
        <motion.div className="card" variants={cardVariants}>
          <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
            <img
              src={teamMember1}
              alt="team-mem-1"
              className="rounded-t-lg"
              style={{
                height: "220px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Grid
              sx={{
                border: "2px solid #5956E8",
                marginTop: 2,
                marginLeft: "30%",
                marginRight: "30%",
                borderRadius: "10px",
                backgroundColor: "#5956E8",
              }}
            ></Grid>
            <Box>
              <Typography className="pt-2 font-bold font-poppins">
                Angeri Pavan Reddy
              </Typography>
              <Typography className="text-base font-poppins text-[#555555]">
                Co-Founder
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
              <IconButton>
                <Link href="https://www.instagram.com/">
                  <img src={Insta} alt="Instagram" width={25}></img>
                </Link>
              </IconButton>
              <IconButton>
                <Link href="https://www.facebook.com/">
                  <img src={fb} alt="Facebook" width={20}></img>
                </Link>
              </IconButton>
              <IconButton>
                <Link href="https://x.com/?lang=en">
                  <img src={x} alt="Twitter" width={20}></img>
                </Link>
              </IconButton>
            </Box>
          </div>
        </motion.div>
      </motion.div>

      {/* Team Member 2 */}
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div
          className="splash"
          style={{
            background:
              "linear-gradient(306deg, hsl(20, 100%, 50%), hsl(40, 100%, 50%))",
          }}
        />
        <motion.div className="card" variants={cardVariants}>
          <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
            <img
              src={teamMember2}
              alt="team-mem-2"
              className="rounded-t-lg"
              style={{
                height: "220px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Grid
              sx={{
                border: "2px solid #5956E8",
                marginTop: 2,
                marginLeft: "30%",
                marginRight: "30%",
                borderRadius: "10px",
                backgroundColor: "#5956E8",
              }}
            ></Grid>
            <Box>
              <Typography className="pt-2 font-bold font-poppins">
                CH Vinay
              </Typography>
              <Typography className="text-base font-poppins text-[#555555]">
                Co-Founder
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
              <IconButton>
                <Link href="https://www.instagram.com/">
                  <img src={Insta} alt="Instagram" width={25}></img>
                </Link>
              </IconButton>
              <IconButton>
                <Link href="https://www.facebook.com/">
                  <img src={fb} alt="Facebook" width={20}></img>
                </Link>
              </IconButton>
              <IconButton>
                <Link href="https://x.com/?lang=en">
                  <img src={x} alt="Twitter" width={20}></img>
                </Link>
              </IconButton>
            </Box>
          </div>
        </motion.div>
      </motion.div>

      {/* Additional team members would be added here in a similar format */}
    </div>
  );
};

export default TeamMobile;
