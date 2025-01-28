import React from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(38, 38, 38, 0.9))",
          padding: { xs: "40px 20px", md: "60px 40px" },
          borderRadius: "20px",
          maxWidth: "1000px",
          margin: "40px auto",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontSize: { xs: "2.5rem", md: "3rem" },
            fontWeight: "bold",
            marginBottom: "30px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            fontFamily: "Cormorant Garamond, serif",
            color: "#C0D3CAFF",
          }}
        >
          אודותיי
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#C0D3CAFF",
            textAlign: "justify",
            maxWidth: "800px",
            mx: "auto",
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: 1.8,
            fontWeight: 400,
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            fontFamily: "Cormorant Garamond, serif",
            "& br": {
              display: "block",
              content: '""',
              marginTop: "1.5em",
            },
            direction: "rtl",
          }}
        >
          שלום! אני נתנאל, צלם מקצועי שחי ונושם את העולם הייחודי של הצילום, עם
          תשוקה עצומה לתפיסת רגעים נדירים ורגשות שלא תמיד קל לתאר במילים. אני
          מאמין שצילום הוא הרבה מעבר לתמונה יפה – זהו סיפור שלם, חוויות, ואוסף
          של רגשות שהופכים לרגעים בלתי נשכחים.
          <br />
          הדרך שלי בעולם הצילום התחילה מתוך אהבה לחקר ולגילוי, מתוך סקרנות לעולם
          סביבי ולרגעים הקטנים שמרכיבים אותו. עם השנים, הבנתי שכל תמונה היא
          דיאלוג קטן ביני לבין מה שאני רואה דרך העדשה – דיאלוג שמבוסס על אמון,
          חיבור וכבוד לרגע.
          <br />
          עבורי, כל מפגש צילומי הוא ייחודי ומותאם באופן אישי לחלומות ולרצונות
          שלך. המטרה שלי היא ליצור עבורך תמונות שמספרות את הסיפור שלך, שתוכל
          להביט בהן ולחוות מחדש את התחושות, הצבעים והריחות של אותם רגעים קסומים.
          <br />
          אני כאן כדי ללוות אותך וליצור יחד חוויות משמעותיות – בין אם מדובר
          באירוע גדול ומרגש, צילומי משפחה אינטימיים, פורטרט אישי שמשקף את
          האישיות שלך, או כל רגע שתרצה לתפוס ולשמר. יחד, נעשה זאת באווירה נינוחה
          ונעימה, עם הרבה רגישות והקפדה על הפרטים הקטנים שהופכים כל צילום
          לאומנות.
          <br />
          אני מזמין אותך לצאת איתי למסע שבו נבנה זיכרונות שישארו איתך לנצח –
          בואו נצלם את הסיפור שלך, את הרגעים שלך, את החיים שלך.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
