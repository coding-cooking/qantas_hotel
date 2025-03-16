import Image from "next/image";
import styled from "@emotion/styled";
import qantasLogo from "@/assets/qantas-logo.png";

const StyledLogo = styled(Image)`
    object-fit: contain;
`;

const Logo = () => <StyledLogo src={qantasLogo} alt="Qantas Logo" width={160} height={80} />;

export default Logo;    