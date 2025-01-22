import React from "react";

const classes = {
  policyWrapper: {
    direction: 'rtl',
    textAlign: 'right',
    backgroundColor: '#f4f4f4', // אפור בהיר, משדר תחושת ניקיון
    color: '#333', // צבע טקסט כהה, נותן ניגוד ברור
    padding: '40px 50px',
    borderRadius: '15px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // הצללה עדינה מאוד
    transition: 'box-shadow 0.3s ease',
    maxWidth: '900px', // גבולות ברוחב מקסימלי
    margin: 'auto', // מרכז את התוכן
  },
  titlePolicy: {
    fontSize: '3rem',
    fontWeight: '500',
    color: '#111', // כהה יותר
    marginBottom: '20px',
    letterSpacing: '1px', // מרווח אותיות עדין
    fontFamily: 'San Francisco, sans-serif', // פונט מינימליסטי
  },
  policyText: {
    fontSize: '1.1rem',
    color: '#555', // צבע טקסט חצי כהה
    marginBottom: '20px',
    lineHeight: 1.8,
    fontFamily: 'San Francisco, sans-serif',
  },
  policyHeading: {
    fontSize: '1.7rem',
    fontWeight: '600',
    color: '#111',
    marginTop: '30px',
    marginBottom: '15px',
    textTransform: 'uppercase', // כותרות באותיות רישיות
    letterSpacing: '0.5px',
  },
  hoverEffect: {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  button: {
    backgroundColor: '#007aff', // כחול אפל
    color: 'white',
    padding: '10px 20px',
    borderRadius: '25px',
    fontSize: '1rem',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  buttonHover: {
    transform: 'scale(1.05)', // הגדלת כפתור במעבר עכבר
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // הצללה חדה יותר בכפתור
  }
};

const PolicySupport = () => {
  return (
    <div style={classes.policyWrapper}>
      <h1 style={classes.titlePolicy}>
        מדיניות ותמיכה
      </h1>
      <p style={classes.policyText}>
        ברוכים הבאים לדף המדיניות והתמיכה שלנו. כאן תוכלו למצוא את כל המידע הדרוש בנוגע לתנאים, מדיניות התשלום וההחזרות, הגנת הפרטיות, ותמיכה לאחר הצילום.
      </p>
      <h2 style={classes.policyHeading}>
        מדיניות כללית
      </h2>
      <p style={classes.policyText}>
        אנו מחויבים לספק שירות צילום מקצועי ברמה הגבוהה ביותר תוך שמירה על חוויית לקוח יוצאת דופן. כדי לשמור על שקיפות, להלן מספר נהלים עיקריים שחשוב להכיר:
      </p>
      <h2 style={classes.policyHeading}>
        קביעת מועדים וזמינות
      </h2>
      <p style={classes.policyText}>
        יש לתאם את תאריך ושעת הצילום מראש, בהתאם לזמינות. אנחנו נעשה את המיטב לעמוד בלוחות הזמנים שנקבעו.
      </p>
      <h2 style={classes.policyHeading}>
        תשלום
      </h2>
      <p style={classes.policyText}>
        התשלום מתבצע בעת ההזמנה, או בהתאם להסכמה אחרת מראש. ניתן לשלם במגוון אמצעים, כולל מזומן, העברה בנקאית או PayBox.
      </p>
      <h2 style={classes.policyHeading}>
        מקדמות והחזרים
      </h2>
      <p style={classes.policyText}>
        במקרים של ביטול מצד הלקוח, תיתכן החזרת מקדמה, בהתאם למועד הביטול ולהסכם. ביטול ברגע האחרון עלול שלא להוביל להחזר. במקרה של דחיית אירוע, נשתדל למצוא מועד חלופי.
      </p>
      <h2 style={classes.policyHeading}>
        הגבלת אחריות
      </h2>
      <p style={classes.policyText}>
        הצוות שלנו מחויב לשמור על זהירות ומקצועיות. עם זאת, אנו לא אחראים לנזקים העלולים להיגרם עקב נסיבות בלתי צפויות או מקרי חירום שאינם בשליטתנו.
      </p>
      <h2 style={classes.policyHeading}>
        הגנת פרטיות
      </h2>
      <p style={classes.policyText}>
        אנחנו מתייחסים לפרטיות הלקוחות ברצינות. התמונות שצולמו לא ישותפו עם צד שלישי או יוצגו בפומבי ללא הסכמתכם המפורשת. הנתונים האישיים שתספקו ישמשו לצורך תקשורת בנוגע לשירות בלבד.
      </p>
      <h2 style={classes.policyHeading}>
        זכויות יוצרים ושימוש בתמונות
      </h2>
      <p style={classes.policyText}>
        התמונות המתקבלות הן לשימוש פרטי בלבד, אלא אם הוסכם אחרת בכתב. אנו עשויים לבקש רשות להשתמש בתמונות למטרות קידום ופרסום במדיה החברתית שלנו, אך לעולם לא נפרסם תמונה ללא הסכמתכם המלאה.
      </p>
      <h2 style={classes.policyHeading}>
        תמיכה לאחר הצילום
      </h2>
      <p style={classes.policyText}>
        לאחר הצילום, ניתן יהיה לבחור מתוך גלריה של התמונות ולבחור את התמונות הסופיות לעריכה. זמני העריכה והתמונות הסופיות יינתנו בהתאם לסיכום עם הלקוח.
      </p>
      <p style={classes.policyText}>
        <strong>עריכה ובחירת תמונות:</strong> ניתן לבקש שינויים נוספים בעריכה הראשונית. בקשות נוספות מעבר למוסכם עשויות לגרור עלויות נוספות.
      </p>
      <p style={classes.policyText}>
        <strong>אספקת הקבצים:</strong> התמונות הסופיות יימסרו בפורמט דיגיטלי או מודפס, בהתאם לבחירתכם. אנו מחויבים לשמור עותק גיבוי לתקופה של עד שנה.
      </p>
      <h2 style={classes.policyHeading}>
        יצירת קשר
      </h2>
      <p style={classes.policyText}>
        אם יש לכם שאלות נוספות בנוגע למדיניות שלנו או שאתם זקוקים לתמיכה, נשמח לעמוד לרשותכם! ניתן ליצור קשר דרך עמוד "נשמח לשמוע מכם" או בטלפון, במייל ובווטסאפ.
      </p>
      <p style={classes.policyText}>
        תודה שבחרתם בנו לצילום הרגעים החשובים שלכם!
      </p>
      <button style={classes.button} onMouseEnter={(e) => e.target.style = {...classes.button, ...classes.buttonHover}} onMouseLeave={(e) => e.target.style = classes.button}>
        צפה בפרטים נוספים
      </button>
    </div>
  );
};

export default PolicySupport;
