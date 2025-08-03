import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const GradientCard = styled(Card)({
  maxWidth: "100%",

  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

const GradientBox = styled(Box)({
  padding: "24px",
  color: "white",
  textAlign: "center",
  background: "linear-gradient(to top, #4a47a3, #2980b9)",
  borderTopLeftRadius: "16px",
  borderTopRightRadius: "16px",
});

const ContentBox = styled(Box)({
  padding: "24px",
});

function VisionSection() {
  return (
    <GradientCard>
      <GradientBox>
        <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
          Our Vision
        </Typography>
      </GradientBox>
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          To position Braj Mohan Developers as a multifaceted infrastructure
          powerhouse that not only constructs{" "}
          <Box component="span" sx={{ color: "#9b59b6", fontWeight: "bold" }}>
            tangible assets
          </Box>{" "}
          but also spearheads innovation in{" "}
          <Box component="span" sx={{ color: "#9b59b6", fontWeight: "bold" }}>
            smart building, renewable energy, and tech-driven solutions
          </Box>
          , fostering regional development and creating resilient communities
          throughout India. and .
        </Typography>
      </CardContent>
    </GradientCard>
  );
}

export default VisionSection;
