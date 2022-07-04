import React from "react";

import HelpButton from "./helpButton";
import { Icons } from "./help.style";

import emailIcon from "../assets/email-icon.png";
import nurseIcon from "../assets/nurse-icon.png";
import publicInquiriesIcon from "../assets/public-inquiries-icon.png";
import meuhedetIcon from "../assets/meuhedet-icon.png";
import koronaIcon from "../assets/korona-icon.png";
import plusIcon from "../assets/plus-icon.png";
import representativeIcon from "../assets/representative-icon.png";

const icons = [
  { title: "צ'ט עם נציג", src: representativeIcon },
  { title: "צ'ט עם אחות ליווי הריון", src: nurseIcon },
  { title: "פניות הציבור", src: publicInquiriesIcon },
  { title: "הצטרפות למאוחדת", src: meuhedetIcon },
  { title: "צ'ט בנושא קורונה", src: koronaIcon },
  { title: "הצטרפות לעדיף/שיא", src: plusIcon },
  { title: "אימייל", src: emailIcon },
];

const HelpIcons = () => {
  return (
    <Icons>
      {icons.map((icon) => {
        return <HelpButton title={icon.title} src={icon.src} />;
      })}
    </Icons>
  );
};

export default HelpIcons;
