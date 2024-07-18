import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import EditOffOutlinedIcon from '@mui/icons-material/EditOffOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
export const Footer1Data = [
  {
    icons: <SummarizeOutlinedIcon />,
    data: "About Us",
    routes:'/about'
  },
  {
    icons:< EditOffOutlinedIcon/>,
    data: "Blogs",
    routes:'/blog'
  },
  {
    icons:<HomeOutlinedIcon/>,
    data: "Home",
    routes:'/'
  },
  {
    icons: <ContentPasteSearchOutlinedIcon/>,
    data: "Careers",
    routes:'/careers'
  },
  {
    icons:<PermPhoneMsgOutlinedIcon/>,
    data: "Contact",
    routes:'/contact'
  }
];