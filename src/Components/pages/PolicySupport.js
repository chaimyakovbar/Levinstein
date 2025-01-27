import React from "react";

const PolicySupport = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#f5f5f5',
      minHeight: '100vh',
    },
    contentWrapper: {
      maxWidth: '900px',
      margin: 'auto',
      direction: 'rtl',
      textAlign: 'right',
      backgroundColor: '#1a1a1a',
      padding: '40px 50px',
      borderRadius: '15px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
    },
    title: {
      fontSize: '3rem',
      fontWeight: '500',
      color: '#f5f5f5',
      marginBottom: '20px',
      letterSpacing: '1px',
    },
    text: {
      fontSize: '1.1rem',
      color: '#d0d0d0',
      marginBottom: '20px',
      lineHeight: 1.8,
    },
    heading: {
      fontSize: '1.7rem',
      fontWeight: '600',
      color: '#f5f5f5',
      marginTop: '30px',
      marginBottom: '15px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <h1 style={styles.title}>מדיניות ותמיכה</h1>
        <p style={styles.text}>
          ברוכים הבאים לדף המדיניות והתמיכה שלנו. כאן תוכלו למצוא את כל המידע
          הדרוש בנוגע לתנאים, מדיניות התשלום וההחזרות, הגנת הפרטיות, ותמיכה לאחר
          הצילום.
        </p>
        <h2 style={styles.heading}>מדיניות כללית</h2>
        <p style={styles.text}>
          אנו מחויבים לספק שירות צילום מקצועי ברמה הגבוהה ביותר תוך שמירה על
          חוויית לקוח יוצאת דופן. כדי לשמור על שקיפות, להלן מספר נהלים עיקריים
          שחשוב להכיר:
        </p>
        <h2 style={styles.heading}>קביעת מועדים וזמינות</h2>
        <p style={styles.text}>
          יש לתאם את תאריך ושעת הצילום מראש, בהתאם לזמינות. אנחנו נעשה את המיטב
          לעמוד בלוחות הזמנים שנקבעו.
        </p>
        <h2 style={styles.heading}>תשלום</h2>
        <p style={styles.text}>
          התשלום מתבצע בעת ההזמנה, או בהתאם להסכמה אחרת מראש. ניתן לשלם במגוון
          אמצעים, כולל מזומן, העברה בנקאית או PayBox.
        </p>
        <h2 style={styles.heading}>מקדמות והחזרים</h2>
        <p style={styles.text}>
          במקרים של ביטול מצד הלקוח, תיתכן החזרת מקדמה, בהתאם למועד הביטול ולהסכם.
          ביטול ברגע האחרון עלול שלא להוביל להחזר. במקרה של דחיית אירוע, נשתדל
          למצוא מועד חלופי.
        </p>
        <h2 style={styles.heading}>הגבלת אחריות</h2>
        <p style={styles.text}>
          הצוות שלנו מחויב לשמור על זהירות ומקצועיות. עם זאת, אנו לא אחראים לנזקים
          העלולים להיגרם עקב נסיבות בלתי צפויות או מקרי חירום שאינם בשליטתנו.
        </p>
        <h2 style={styles.heading}>הגנת פרטיות</h2>
        <p style={styles.text}>
          אנחנו מתייחסים לפרטיות הלקוחות ברצינות. התמונות שצולמו לא ישותפו עם צד
          שלישי או יוצגו בפומבי ללא הסכמתכם המפורשת. הנתונים האישיים שתספקו ישמשו
          לצורך תקשורת בנוגע לשירות בלבד.
        </p>
        <h2 style={styles.heading}>זכויות יוצרים ושימוש בתמונות</h2>
        <p style={styles.text}>
          התמונות המתקבלות הן לשימוש פרטי בלבד, אלא אם הוסכם אחרת בכתב. אנו עשויים
          לבקש רשות להשתמש בתמונות למטרות קידום ופרסום במדיה החברתית שלנו, אך
          לעולם לא נפרסם תמונה ללא הסכמתכם המלאה.
        </p>
        <h2 style={styles.heading}>תמיכה לאחר הצילום</h2>
        <p style={styles.text}>
          לאחר הצילום, ניתן יהיה לבחור מתוך גלריה של התמונות ולבחור את התמונות
          הסופיות לעריכה. זמני העריכה והתמונות הסופיות יינתנו בהתאם לסיכום עם
          הלקוח.
        </p>
        <p style={styles.text}>
          <strong>עריכה ובחירת תמונות:</strong> ניתן לבקש שינויים נוספים בעריכה
          הראשונית. בקשות נוספות מעבר למוסכם עשויות לגרור עלויות נוספות.
        </p>
        <p style={styles.text}>
          <strong>אספקת הקבצים:</strong> התמונות הסופיות יימסרו בפורמט דיגיטלי או
          מודפס, בהתאם לבחירתכם. אנו מחויבים לשמור עותק גיבוי לתקופה של עד שנה.
        </p>
        <h2 style={styles.heading}>יצירת קשר</h2>
        <p style={styles.text}>
          אם יש לכם שאלות נוספות בנוגע למדיניות שלנו או שאתם זקוקים לתמיכה, נשמח
          לעמוד לרשותכם! ניתן ליצור קשר דרך עמוד "נשמח לשמוע מכם" או בטלפון, במייל
          ובווטסאפ.
        </p>
        <p style={styles.text}>
          תודה שבחרתם בנו לצילום הרגעים החשובים שלכם!
        </p>  
      </div>
    </div>
  );
};

export default PolicySupport;
