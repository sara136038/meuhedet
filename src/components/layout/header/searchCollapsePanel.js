import React from "react";

import SearchTags from "./searchTags";
import { SearchCollapseCantainer, H3Header } from "./header.style";

const SearchCollapsePanel = () => {
  const appointmentService = [
    "רופאים/ות",
    "מכונים ומטפלים/ות",
    "מרפאות",
    "שרותי מעבדה",
    "בדיקות קורונה",
    "חיסוני קורונה",
    "חיסוני פוליו",
    "אחים/ות",
    "בתי מרקחת",
    "יעוץ רוקחי",
    "רפואה דחופה ומיון היברידי",
    "מאוחדת משלימה",
    "טיפות חלב",
    "מרפאות שינים",
    "מנתחים/ות במאוחדת",
    "שרותים במאוחדת",
    "בתי חולים",
    "מוקד הריון ולידה היברידי",
  ];
  const meuchdetSiService = [
    "חוות דעת נוספת",
    "מנתחים/ות",
    "ניתוחים ופעולות",
    "בתי חולים",
    "טיפולים ושרותים",
  ];
  const informationService = ["כתבות ותוכן", "זכאות לשרותים"];

  return (
    <SearchCollapseCantainer>
      <H3Header>איתור שירותים וזימון תורים</H3Header>
      <SearchTags tags={appointmentService} />

      <H3Header>איתור שירותי עדיף ושיא</H3Header>
      <SearchTags tags={meuchdetSiService} />

      <H3Header>מידע ותוכן</H3Header>
      <SearchTags tags={informationService} />
    </SearchCollapseCantainer>
  );
};

export default SearchCollapsePanel;
