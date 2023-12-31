import {
  Grid,
  Box,
  Container,
  Typography,
  useMediaQuery,
  Divider,
} from "@mui/material";
import Image from "next/image";

const PackageDetails = [
  {
    id: "cv-letter",
    name: "CV-Letter",
    description: ` cv-letter is a Command Line Interface (CLI) tool that combines a
        resume, a job description, and a LaTeX template to create a
        personalized AI-generated cover letter. It utilizes OpenAI's
        GPT-3.5 model to tailor the content to specific job applications,
        highlighting crucial details like email contact, company names,
        and relevant skills.`,
    href: "https://www.npmjs.com/package/cv-letter",
  },
  {
    id: "monk-minal-cli",
    name: "Minal-CLI",
    description: `MonkeyType Terminal is a powerful, open-source typing practice tool designed specifically for the command-line interface. It offers an immersive and interactive way to improve your typing speed and accuracy right from your terminal.Experience the thrill of improving your typing skills with MonkeyType Terminal.`,
    href: "https://www.npmjs.com/package/monk-minal",
  },
];

const PackageDetailsComponent = ({ packageDetail }) => {
  const { id, name, description, href } = packageDetail;
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={5.8}
      lg={5.8}
      sx={{
        border: "1px solid #212121",
        p: 1,
        borderRadius: 2,
        mb: 4,
        
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: 300,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: `linear-gradient(238deg, #000 36.18%, #F00 91.31%)`,
          borderRadius: 2,
        }}
      >
        <Typography variant="h1">{name}</Typography>
      </Box>
      <Box>
        <Typography
          variant="body1"
          className="SpaceFont"
          sx={{ fontWeight: 700, mt: 1 }}
        >
          {name}
        </Typography>
        <Typography
          variant="body1"
          className="GrayColor SpaceFont"
          sx={{ fontWeight: 0 , minHeight:150}}
        >
          {description}
        </Typography>
        <Divider
          className="GrayColor"
          sx={{ borderColor: "rgb(106 104 104 / 49%)" }}
        />
        <Typography className="SpaceFont" sx={{ fontWeight: 700 }}>
          <a href={href} className="SpaceFont GrayColor">
            {href.split("https://www.npmjs.com/package/")[1]}
          </a>
        </Typography>
      </Box>
    </Grid>
  );
};

const PublishedPackages = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Container sx={{ width: "100%" }}>
      <Typography variant="h6" className="SpaceFont" sx={{ mt: 40 }}>
        Published Packages
      </Typography>
      <Typography
        variant="body1"
        className="GrayColor SpaceFont"
        sx={{ width: isMobile ? "100%" : "30%", mb: 15 }}
      >
        These are the packages that I have published on npm. They are all open
        source and free to use. I have built these packages to make my life
        easier and I hope they will help you too.
      </Typography>
      <Grid container justifyContent={"space-between"}>
        {PackageDetails.map((packageDetail) => (
          <PackageDetailsComponent packageDetail={packageDetail} key={packageDetail.id} />
        ))}
      </Grid>
    </Container>
  );
};
export default PublishedPackages;
