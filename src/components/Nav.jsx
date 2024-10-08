import { useEffect, useState } from "react";
import styled from "styled-components"

const Nav = () => {
    const [show, setShow] = useState("false");
    const listener = () => {
        console.log(window.scrollY);
        if (window.scrollY > 50) {
            setShow("true")
        } else {
            setShow("false")
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('scroll', listener);
        }
    }, [])
    return (
        <NavWrapper show={show}>
            <Logo>
                <img
                    alt="logo"
                    src="/images/apple-logo.png"
                    onClick={() => (window.location.href = "/")}
                />
            </Logo>
        </NavWrapper>
    )
}

const NavWrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: ${props => props.show === "true" ? "#000000" : "#000000"};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;
const Logo = styled.a`
    padding: 0;
    width: 80px;
    font-size: 0;
    displat: inline-block;
    margin-bottom: 10px;

    img{
        display: blocl;
        width: 100%;
    }
`;
export default Nav
