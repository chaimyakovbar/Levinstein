import React from "react";
import mainphoto from "../../assets/images/circumcision/circumcision_3.jpg";

const HeroImages = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "300px",
        width: "374px",
        backgroundImage: `url(${mainphoto})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Text over the image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "20px",
        }}
      >
        <h1 style={{ margin: 0 }}>אודותיי</h1>
        <p style={{ marginTop: "10px", lineHeight: "1.5" }}>
          שלום! אני נתנאל, צלם מקצועי המתמחה בתפיסת רגעים ייחודיים וסיפורי חיים
          דרך העדשה. עבורי, צילום הוא דרך לחבר אנשים לרגעים ולרגשות בצורה
          ייחודית ואותנטית.
          <br />
          כל מפגש צילומי מותאם אישית לחלומות ולרצונות שלך, עם דגש על חוויות
          משמעותיות, אווירה נינוחה, ורגישות לפרטים הקטנים שהופכים כל צילום
          ליצירת אמנות.
          <br />
          אני מזמין אותך ליצור יחד זיכרונות יפים שילוו אותך לנצח – בואו נצלם
          את הסיפור שלך.
        </p>
      </div>
    </div>
  );
};

export default HeroImages;
