import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { theme } = useTheme();

  const colorr = theme === "light" ? "rgb(50, 50, 50)" : "rgb(190,190,190)";
  return (
    <div className="footer">
      <p className="footer2">
        <span
          style={{
            textAlign: "center",
            marginTop: "10px",
            color: colorr,
          }}
        >
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/tayfundagci/"
            style={{
              fontWeight: "bold",
              textDecoration: "none",
              color: colorr,
            }}
            target="blank"
          >
            Tayfun Dagci
          </a>
        </span>
        <label style={{ marginLeft: "10px" }}>
          <a href="https://www.github.com/tayfundagci/" target="blank">
            <BsGithub
              size={"25"}
              style={{ textDecoration: "none", color: colorr }}
            />
          </a>
          <a
            className="ms-2"
            href="https://www.linkedin.com/in/tayfundagci/"
            target="blank"
          >
            <AiFillLinkedin size={"30"} style={{ color: colorr }} />
          </a>
        </label>
      </p>
    </div>
  );
}

export default Footer;
