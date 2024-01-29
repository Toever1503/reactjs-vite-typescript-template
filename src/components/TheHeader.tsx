import { Link } from "react-router-dom";
import "./TheHeaderCss.css";
import { Box, Image } from "@chakra-ui/react";

export default function TheHeader() {


    return <header>
        <Box className="header_body"
            w={{ base: "100%", md: "84%" }}
            pt={{ base: 0, md: "20px" }}
            p={{ base: "20px", md: 0 }}>
            <Link to="https://twitter.com/" target="_blank">
                <Image style={{ maxWidth: "60px", maxHeight: "60px" }} mt={{ base: 0, md: "20px" }} src="/sns/x.png" alt="..." />
            </Link>

            <div >
                <Link to="/" className="site_logo">
                    <Image maxW={{ base: "44px", "2xl": "119px" }} src="/site-logo.png" alt="..." />
                    <Image maxW={{ base: "97px", "2xl": "71px" }} src="/site-txt.png" alt="..." />
                </Link>
            </div>


            <Link to="https://telegram.org/" target="_blank">
                <Image style={{ maxWidth: "60px", maxHeight: "60px" }} mt={{ base: 0, md: "20px" }} src="/sns/tele.png" alt="..." />
            </Link>
        </Box>
    </header>
}