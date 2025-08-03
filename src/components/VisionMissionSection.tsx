import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Sample icons (replace with your actual icon components or svgs)
export function InnovationIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2563eb"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14a4 4 0 100-8 4 4 0 000 8z" />
      <path d="M12 2v2M22 12h-2M12 22v-2M2 12h2" />
      <path d="M16.95 7.05l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l-1.414-1.414M7.05 7.05l-1.414-1.414" />
    </svg>
  );
}
const CollaborationIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2563eb"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 11.37A4 4 0 1111.37 16a4 4 0 014.63-4.63z" />
    <path d="M21 12l-7.25-2.75L12 21.5 21 12z" />
    <path d="M2 12h7m-4 5l4 4m-4-4l-4 4" />
  </svg>
);
const FocusIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2563eb"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <path d="M15 12h-3M9 12h3M12 9v3M12 15v-3" />
  </svg>
);
const InfrastructureIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2563eb"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c-1.49 0-2.85 0.5-3.8 1.34L12 5l-5.2 6.34C5.85 10.5 4.49 10 3 10a9 9 0 000 18h18a9 9 0 000-18zm-9-5l-8 9h16l-8-9z" />
  </svg>
);
const EcosystemIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2563eb"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 12c0-3.31-2.69-6-6-6s-6 2.69-6 6a6 6 0 1012 0z" />
    <path d="M12 6V3M6 12H3M12 18v3M18 12h3" />
    <path d="M16.95 7.05l-2.12 2.12M7.05 16.95l-2.12 2.12M7.05 7.05l-2.12-2.12M16.95 16.95l-2.12-2.12" />
  </svg>
);

const SectionWrapper = styled.section`
  background-color: #f7f9fc;
  padding: 80px 0;
  font-family: "Inter", sans-serif;
`;

const ContentContainer = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 60px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const MissionCard = styled(motion.div)`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 20px 30px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #e3f2fd;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
  line-height: 1.6;
  text-align: justify; // Added this line to justify the text
`;

const missionData = [
  {
    title: "Empowering Infrastructure Growth",
    description:
      "Offer specialized infrastructure and civil engineering solutions to help clients solve tough engineering problems and reach long-term, sustainable success.",
    icon: <InfrastructureIcon />,
  },
  {
    title: "Driving Smart Innovation",
    description:
      "Integrate artificial intelligence (AI), renewable energy, and modern construction technologies to increase project efficiency, environmental sustainability, and future-readiness.",
    icon: <InnovationIcon />,
  },
  {
    title: "Holistic Development Services",
    description:
      "Provide comprehensive knowledge of road and bridge construction, interior and exterior design, security and manpower solutions, renewable power projects including solar and electric vehicles, and real estate development.",
    icon: <CollaborationIcon />,
  },
  {
    title: "Strengthening Bihar's Infrastructure",
    description:
      "Encourage state development by funding top-notch infrastructure initiatives that improve connectivity, generate jobs, and advance Bihar's economy.",
    icon: <FocusIcon />,
  },
  {
    title: "Creating a Progressive Ecosystem",
    description:
      "Encourage inclusive growth strategies, green building techniques, and smart city planning to create resilient, community-focused infrastructure throughout India.",
    icon: <EcosystemIcon />,
  },
];

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const VisionMissionSection = () => {
  return (
    <SectionWrapper>
      <ContentContainer>
        <Title>Our Mission</Title>
        <GridContainer>
          {missionData.map((mission, index) => (
            <MissionCard
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <IconWrapper>{mission.icon}</IconWrapper>
              <CardTitle>{mission.title}</CardTitle>
              <CardDescription>{mission.description}</CardDescription>
            </MissionCard>
          ))}
        </GridContainer>
      </ContentContainer>
    </SectionWrapper>
  );
};

export default VisionMissionSection;
