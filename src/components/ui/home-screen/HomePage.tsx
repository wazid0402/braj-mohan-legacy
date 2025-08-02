import "./HomePage.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { CT_Toolbar } from "../../../lib/toolbar/ToolBar";
import HomeIcon from "@mui/icons-material/Home";
import { Typography } from "@mui/material";

export function HomePage() {
  return (
    <Box className="App">
      <Box className="background" />
      <Box className="overlay">
        {/* License Details */}
        <Box className="meta">
          <Typography>GBT. 10AABC057HTZS</Typography>
          <Typography>CIM. LAG200BRI59500580</Typography>
        </Box>

        {/* Top Section */}
        <Box
          component="header"
          className="top-bar"
          sx={{
            width: "100%", // ensures full viewport width
            maxWidth: "100%",
            overflowX: "hidden",
          }}
        >
          <CT_Toolbar
            logo={{
              id: "logo1",
              logoImage: (
                <img src="/Logo.png" alt="Logo" style={{ height: "20px" }} />
              ),
              direction: "Left",
              separator: false,
            }}
            menus={[
              {
                id: "home",
                icon: <HomeIcon />,
                displayType: "Icon",
                navigate: "/",
                name: "Home",
              },
              {
                id: "about",
                name: "About BMD Group",
                displayType: "Text",
                menus: [
                  {
                    id: "overview",
                    name: "Overview",
                    navigate: "/about/overview",
                  },
                  {
                    id: "leadership",
                    name: "Leadership",
                    navigate: "/about/leadership",
                  },
                  {
                    id: "workhistory",
                    name: "Work History",
                    navigate: "/about/experience",
                  },
                  {
                    id: "achievements",
                    name: "Achievements",
                    navigate: "/growth",
                  },
                ],
              },
              {
                id: "businesses",
                name: "Our Businesses",
                displayType: "Text",
                navigate: "/careers",
              },
              {
                id: "services",
                name: "Products & Services",
                displayType: "Text",
                navigate: "/careers",
                menus: [
                  {
                    id: "realState",
                    name: "Real Estate",
                    navigate: "/about/overview",
                  },
                  {
                    id: "constructions",
                    name: "Constructions",
                    navigate: "/about/leadership",
                  },
                  {
                    id: "interiorExterior",
                    name: "Interior & Exterior",
                    navigate: "/about/experience",
                  },
                  {
                    id: "powerEnergy",
                    name: "Power & Energy",
                    navigate: "/growth",
                  },
                  {
                    id: "securityManpower",
                    name: "Security & Manpower",
                    navigate: "/growth",
                  },
                ],
              },
              {
                id: "careers",
                name: "Careers",
                displayType: "Text",
                navigate: "/careers",
              },
            ]}
            subMenusCategorized={2}
            subMenusPanelSX={{
              backgroundColor: "#fff",
              textColor: "#003366",
              boxWidth: 220,
              padding: "15px",
            }}
            sx={{
              background:
                "linear-gradient(90deg, rgba(0, 163, 173, 0.85) 0%, rgba(0, 123, 145, 0.65) 100% )",
            }}
          />
        </Box>

        {/* Main Content */}
        <Box component="main" className="main-content">
          <Typography variant="h2">Braj Mohan Group</Typography>
          <Box mb={5}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#00A3AD",
                "&:hover": {
                  backgroundColor: "#008b94",
                },
                fontWeight: "bold",
                px: 4,
                py: 1.5,
                borderRadius: "8px",
                fontSize: "16px",
              }}
            >
              Contact Us
            </Button>
          </Box>

          <Box className="info-box">
            <Typography>
              <strong>Office Address:</strong> House No. BHT, Vijay Nagar,
              Patna, Bihar – 800020
            </Typography>
            <Typography>
              <strong>Registered Address:</strong> Ganga Path, West Patel Nagar,
              Board Colony, Patna, Bihar, 800029
            </Typography>
            <Typography>
              <strong>Contact No.:</strong> +81-612-517-4811 &nbsp;&nbsp;
              <strong>Email:</strong> info@brajmohangroup.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
