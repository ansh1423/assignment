// import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
export const FooterData ={
    
    section1:{
        logo:"/Footerlogo.png",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum elit at libero  ",
        icon:[
            {
                name:"facebook",
                iconClass:<Facebook/>
            },
            {
                name:"LinkedIn",
                iconClass:<LinkedIn/>
            },
            {
                name:"Instagram",
                iconClass:<Instagram/>
            },
            {
                name:"twitter",
                iconClass:<Twitter/>
            },
        ]
    },
    section2:{
        heading:"Company",
        content:[
            {
                name:"About us",
                link:"/about",

            },
            {
                name:"Blog",
                link:"/careers",

            },
           
            {
                name:"Contact-us",
                link:"/contact",

            },
            {
                name:"Pricing",
                link:"/blog",

            },
            {
                name:"Testimonial",
                link:"/services",

            },
        ]
    },
    section3:{
        heading:"Support",
        content:[
            {
                name:"Help Center",
                link:"",

            },
            {
                name:"Terms of Service",
                link:"",

            },
            {
                name:"Logo designing",
                link:"",

            },
            {
                name:"Legal",
                link:"",

            },
            {
                name:"Privacy Policy",
                link:"",

            },
            {
                name:"Status",
                link:"",

            }
        ]
    },
    

    section4:{
        heading:"Stay up to date"
        
    }
   
}