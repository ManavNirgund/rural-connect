import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

export const appName = {
  title: "Rural Connect",
};

export const socials = [
  { id: 1, icon: <FacebookIcon />, url: "https://www.facebook.com/axisbank" },
  {
    id: 2,
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/company/axis-bank/?originalSubdomain=in",
  },
  { id: 3, icon: <TwitterIcon />, url: "https://twitter.com/AxisBank" },
  { id: 4, icon: <YouTubeIcon />, url: "https://www.youtube.com/@AxisBank" },
  {
    id: 5,
    icon: <InstagramIcon />,
    url: "https://www.instagram.com/axis_bank/",
  },
];

export const services = [
    {id: 1, name: "Weather", to: "/forecast"},
    {id: 2, name:"News", to: "/"},
]

export const newsDropdown = [
  {id: 1, name: "Global News", to: "/news"},
  {id: 2, name: "Local News", to: "/local-news"},
]