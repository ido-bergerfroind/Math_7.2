// Math Exam - 100 Questions from 4 Units
// Unit 2: Numbers on Number Line, Unit 3: Multiplication/Division
// Unit 5: Triangle Area, Unit 6: Addition/Subtraction

const questions = [
    // Unit 2: Numbers and Operations on Number Line (Questions 1-25)
    // Based on pages 27-41 only
    
    // Fractions on Number Line (pages 27-30)
    {
        question: "השלימו את הסדרה: -2, -1.5, ___, -0.5, 0",
        options: ["-1", "-2.5", "0", "-0.25"],
        correct: 0,
        explanation: "דילוגים של 0.5, לכן -1 הוא המספר החסר"
    },
    {
        question: "השלימו את הסדרה: 1, 1/2, 0, ___, -1",
        options: ["-1/2", "1/4", "-1/4", "-2"],
        correct: 0,
        explanation: "דילוגים של -1/2, לכן -1/2 הוא המספר החסר"
    },
    {
        question: "השוו: 3/4 ___ 1/4",
        options: [">", "<", "=", "≠"],
        correct: 0,
        explanation: "3/4 גדול מ-1/4 כי הוא ימינה יותר על הציר"
    },
    {
        question: "השוו: -3/4 ___ -1/4",
        options: ["<", ">", "=", "≠"],
        correct: 0,
        explanation: "-3/4 קטן מ--1/4 כי הוא שמאלה יותר על הציר"
    },
    {
        question: "איזה שבר נמצא בין 1/4 ל-1/2 על ציר המספרים?",
        options: ["3/8", "1/8", "5/8", "3/4"],
        correct: 0,
        explanation: "1/4 = 2/8, 1/2 = 4/8, לכן 3/8 נמצא ביניהם"
    },

    // Order Preservation & Opposite Numbers (pages 31-36)
    {
        question: "אם a > b, מה קורה כש מוסיפים 5 לשני המספרים?",
        options: ["a + 5 > b + 5", "a + 5 < b + 5", "a + 5 = b + 5", "לא ניתן לקבוע"],
        correct: 0,
        explanation: "הסדר נשמר בחיבור: a + 5 > b + 5"
    },
    {
        question: "מהו הנגדי של -7?",
        options: ["7", "-7", "0", "14"],
        correct: 0,
        explanation: "הנגדי של מספר שלילי הוא מספר חיובי: -(-7) = 7"
    },
    {
        question: "מהו הערך של a + (-a)?",
        options: ["0", "2a", "-2a", "a"],
        correct: 0,
        explanation: "מספר והנגדי שלו תמיד נותנים 0"
    },
    {
        question: "פשטו: 15 - (8 + 3)",
        options: ["4", "26", "20", "6"],
        correct: 0,
        explanation: "15 - (8 + 3) = 15 - 8 - 3 = 4"
    },
    {
        question: "פשטו: 20 - (12 - 5)",
        options: ["13", "3", "27", "7"],
        correct: 0,
        explanation: "20 - (12 - 5) = 20 - 12 + 5 = 13"
    },
    {
        question: "פשטו: a - (b + c)",
        options: ["a - b - c", "a + b + c", "a - b + c", "a + b - c"],
        correct: 0,
        explanation: "חיסור סכום = חיסור כל מחובר: a - (b + c) = a - b - c"
    },
    {
        question: "פשטו: 10 - (-3 + 7)",
        options: ["6", "20", "14", "4"],
        correct: 0,
        explanation: "10 - (-3 + 7) = 10 + 3 - 7 = 6"
    },
    {
        question: "פשטו: x - (y - z)",
        options: ["x - y + z", "x - y - z", "x + y - z", "x + y + z"],
        correct: 0,
        explanation: "x - (y - z) = x - y + z"
    },
    {
        question: "השוו: -(a + 5) ___ -a - 5",
        options: ["=", ">", "<", "≠"],
        correct: 0,
        explanation: "הנגדי לסכום שווה לסכום הנגדיים: -(a + 5) = -a + (-5) = -a - 5"
    },
    {
        question: "השוו בלי לחשב: (2/3 + 1/4) ___ (2/3 + 1/5)",
        options: [">", "<", "=", "≥"],
        correct: 0,
        explanation: "1/4 > 1/5, לכן הסכום הראשון גדול יותר"
    },
    {
        question: "אם x < y, מה נכון על x - 3 לעומת y - 3?",
        options: ["x - 3 < y - 3", "x - 3 > y - 3", "x - 3 = y - 3", "לא ניתן לקבוע"],
        correct: 0,
        explanation: "חיסור (חיבור הנגדי) שומר על הסדר"
    },
    {
        question: "השוו: (-1/2 + 3) ___ (-1/3 + 3)",
        options: ["<", ">", "=", "≤"],
        correct: 0,
        explanation: "-1/2 < -1/3, ולכן גם -1/2 + 3 < -1/3 + 3"
    },
    {
        question: "מהו הנגדי לסכום (3 + 5)?",
        options: ["-8", "8", "-3 - 5", "-3 + 5"],
        correct: 0,
        explanation: "-(3 + 5) = -8"
    },
    {
        question: "אם a = -5, מהו -a?",
        options: ["5", "-5", "10", "-10"],
        correct: 0,
        explanation: "-a = -(-5) = 5"
    },
    {
        question: "סדרו מהקטן לגדול: -1/2, -3/4, -1/4, 0",
        options: ["-3/4, -1/2, -1/4, 0", "-1/4, -1/2, -3/4, 0", "0, -1/4, -1/2, -3/4", "-3/4, -1/4, -1/2, 0"],
        correct: 0,
        explanation: "ככל שרחוקים יותר מאפס בכיוון שלילי, המספר קטן יותר"
    },
    {
        question: "השוו: -1/3 ___ -1/2",
        options: [">", "<", "=", "לא ניתן להשוות"],
        correct: 0,
        explanation: "-1/3 קרוב יותר לאפס, לכן -1/3 > -1/2"
    },
    {
        question: "איזה שבר הכי קרוב ל-0?",
        options: ["-1/10", "-1/2", "-2/3", "-3/4"],
        correct: 0,
        explanation: "-1/10 הוא הקרוב ביותר לאפס מבין השברים השליליים"
    },
    {
        question: "כמה חלקים שווים יש בין 0 ל-1 אם המרחק בין שנתות הוא 1/5?",
        options: ["5", "4", "6", "10"],
        correct: 0,
        explanation: "1 ÷ (1/5) = 5 חלקים"
    },
    {
        question: "אם -3 < -1, מה נכון על -3 + 10 לעומת -1 + 10?",
        options: ["-3 + 10 < -1 + 10", "-3 + 10 > -1 + 10", "-3 + 10 = -1 + 10", "תלוי במספרים"],
        correct: 0,
        explanation: "חיבור שומר על הסדר: 7 < 9"
    },
    {
        question: "מעלית בקומה -3. עלתה 7 קומות. באיזו קומה היא?",
        options: ["4", "10", "-10", "-4"],
        correct: 0,
        explanation: "-3 + 7 = 4"
    },

    // Unit 3: Multiplication and Division (Questions 26-50)
    
    {
        question: "חשבו: (-5) × 8",
        options: ["-40", "40", "-13", "13"],
        correct: 0,
        explanation: "מספר שלילי כפול מספר חיובי = מספר שלילי"
    },
    {
        question: "חשבו: (-7) × (-6)",
        options: ["42", "-42", "13", "-13"],
        correct: 0,
        explanation: "מספר שלילי כפול מספר שלילי = מספר חיובי"
    },
    {
        question: "חשבו: 9 × (-4)",
        options: ["-36", "36", "-13", "5"],
        correct: 0,
        explanation: "מספר חיובי כפול מספר שלילי = מספר שלילי"
    },
    {
        question: "חשבו: (-12) × 0",
        options: ["0", "-12", "12", "לא מוגדר"],
        correct: 0,
        explanation: "כל מספר כפול 0 שווה 0"
    },
    {
        question: "חשבו: (-1) × 15",
        options: ["-15", "15", "-16", "14"],
        correct: 0,
        explanation: "כפל ב-(-1) נותן את המספר הנגדי"
    },
    {
        question: "חשבו: (-2) × 3 × (-4)",
        options: ["24", "-24", "6", "-6"],
        correct: 0,
        explanation: "מספר זוגי של גורמים שליליים = תוצאה חיובית"
    },
    {
        question: "חשבו: (-1) × (-1) × (-1)",
        options: ["-1", "1", "0", "-3"],
        correct: 0,
        explanation: "מספר אי-זוגי של גורמים שליליים = תוצאה שלילית"
    },
    {
        question: "כמה גורמים שליליים צריך כדי שהמכפלה תהיה חיובית?",
        options: ["מספר זוגי", "מספר אי-זוגי", "לפחות 2", "בדיוק 1"],
        correct: 0,
        explanation: "מספר זוגי של גורמים שליליים נותן תוצאה חיובית"
    },
    {
        question: "חשבו: (-3)²",
        options: ["9", "-9", "6", "-6"],
        correct: 0,
        explanation: "(-3)² = (-3) × (-3) = 9 (מעריך זוגי)"
    },
    {
        question: "חשבו: (-2)³",
        options: ["-8", "8", "-6", "6"],
        correct: 0,
        explanation: "(-2)³ = (-2) × (-2) × (-2) = -8 (מעריך אי-זוגי)"
    },
    {
        question: "חשבו: (-1)⁵",
        options: ["-1", "1", "0", "-5"],
        correct: 0,
        explanation: "מעריך אי-זוגי: (-1)⁵ = -1"
    },
    {
        question: "חשבו: (-1)¹⁰⁰",
        options: ["1", "-1", "100", "-100"],
        correct: 0,
        explanation: "מעריך זוגי: (-1)¹⁰⁰ = 1"
    },
    {
        question: "השוו: (-2)⁴ ___ -2⁴",
        options: [">", "<", "=", "≠"],
        correct: 0,
        explanation: "(-2)⁴ = 16, -2⁴ = -16, לכן 16 > -16"
    },
    {
        question: "חשבו: 20 ÷ (-4)",
        options: ["-5", "5", "-24", "24"],
        correct: 0,
        explanation: "מחולק חיובי חלקי מחלק שלילי = מנה שלילית"
    },
    {
        question: "חשבו: (-36) ÷ (-9)",
        options: ["4", "-4", "45", "-45"],
        correct: 0,
        explanation: "מחולק שלילי חלקי מחלק שלילי = מנה חיובית"
    },
    {
        question: "חשבו: (-15) ÷ 3",
        options: ["-5", "5", "-18", "18"],
        correct: 0,
        explanation: "מחולק שלילי חלקי מחלק חיובי = מנה שלילית"
    },
    {
        question: "חשבו: 0 ÷ (-7)",
        options: ["0", "-7", "7", "לא מוגדר"],
        correct: 0,
        explanation: "0 חלקי כל מספר (שאינו 0) = 0"
    },
    {
        question: "מהו הופכי של -1/3?",
        options: ["-3", "3", "-1/3", "1/3"],
        correct: 0,
        explanation: "ההופכי של -1/3 הוא -3 (כי -1/3 × -3 = 1)"
    },
    {
        question: "מהו הופכי של -5?",
        options: ["-1/5", "1/5", "5", "-5"],
        correct: 0,
        explanation: "ההופכי של -5 הוא -1/5"
    },
    {
        question: "מהו המכפלה של מספר בהופכי שלו?",
        options: ["1", "0", "המספר עצמו", "תלוי במספר"],
        correct: 0,
        explanation: "מספר כפול ההופכי שלו תמיד שווה 1"
    },
    {
        question: "חשבו: 5 - 3 × 2",
        options: ["-1", "4", "1", "6"],
        correct: 0,
        explanation: "כפל קודם לחיסור: 5 - 6 = -1"
    },
    {
        question: "חשבו: (5 - 3) × 2",
        options: ["4", "-1", "1", "6"],
        correct: 0,
        explanation: "סוגריים קודמים: 2 × 2 = 4"
    },
    {
        question: "חשבו: -2 + 3 × (-4)",
        options: ["-14", "-4", "4", "14"],
        correct: 0,
        explanation: "כפל קודם: -2 + (-12) = -14"
    },
    {
        question: "חשבו: 10 ÷ 2 + 3",
        options: ["8", "2", "13", "5"],
        correct: 0,
        explanation: "חילוק קודם: 5 + 3 = 8"
    },
    {
        question: "באיזה רביע נמצאת הנקודה (3, -2)?",
        options: ["IV", "I", "II", "III"],
        correct: 0,
        explanation: "x חיובי, y שלילי = רביע IV"
    },

    // Unit 5: Triangle Area (Questions 51-65) - 15 questions
    {
        question: "משולש ישר-זווית עם ניצבים 6 ס\"מ ו-8 ס\"מ. מה שטחו?",
        options: ["24 סמ\"ר", "48 סמ\"ר", "14 סמ\"ר", "32 סמ\"ר"],
        correct: 0,
        explanation: "שטח = (6 × 8) ÷ 2 = 24 סמ\"ר"
    },
    {
        question: "משולש עם בסיס 10 ס\"מ וגובה 5 ס\"מ. מה שטחו?",
        options: ["25 סמ\"ר", "50 סמ\"ר", "15 סמ\"ר", "20 סמ\"ר"],
        correct: 0,
        explanation: "שטח משולש = (בסיס × גובה) ÷ 2 = (10 × 5) ÷ 2 = 25"
    },
    {
        question: "שטח משולש 30 סמ\"ר. בסיס 10 ס\"מ. מה הגובה?",
        options: ["6 ס\"מ", "3 ס\"מ", "12 ס\"מ", "15 ס\"מ"],
        correct: 0,
        explanation: "30 = (10 × גובה) ÷ 2, לכן גובה = 6"
    },
    {
        question: "מלבן 4×6. משולש ישר-זווית עם אותם ניצבים. השוו שטחיהם:",
        options: ["שטח המלבן פי 2", "שטחים שווים", "שטח המשולש פי 2", "תלוי במידות"],
        correct: 0,
        explanation: "שטח מלבן = 24, שטח משולש = 12, המלבן פי 2"
    },
    {
        question: "שטח משולש 18 סמ\"ר. ניצב אחד 6 ס\"מ. מה הניצב השני?",
        options: ["6 ס\"מ", "3 ס\"מ", "9 ס\"מ", "12 ס\"מ"],
        correct: 0,
        explanation: "18 = (6 × ניצב) ÷ 2, לכן ניצב = 6"
    },
    {
        question: "כמה גבהים יש לכל משולש?",
        options: ["3", "1", "2", "תלוי בסוג"],
        correct: 0,
        explanation: "לכל משולש 3 גבהים - אחד לכל צלע"
    },
    {
        question: "במשולש ישר-זווית, הניצבים הם:",
        options: ["גם גבהים", "רק צלעות", "רק זווית", "לא גבהים"],
        correct: 0,
        explanation: "הניצבים במשולש ישר-זווית מהווים גם גבהים"
    },
    {
        question: "שטח משולש 40 סמ\"ר. צלע 16 ס\"מ. גובה לצלע?",
        options: ["5 ס\"מ", "10 ס\"מ", "2.5 ס\"מ", "20 ס\"מ"],
        correct: 0,
        explanation: "40 = (16 × גובה) ÷ 2, לכן גובה = 5"
    },
    {
        question: "שני משולשים עם אותו בסיס ואותו גובה. מה ניתן לומר על שטחיהם?",
        options: ["שווים", "שונים", "תלוי בזוויות", "לא ניתן לקבוע"],
        correct: 0,
        explanation: "שטח תלוי רק בבסיס ובגובה, לכן שטחים שווים"
    },
    {
        question: "משולש עם שטח 12 סמ\"ר. איזה מהבאים אפשרי?",
        options: ["בסיס 6, גובה 4", "בסיס 3, גובה 4", "בסיס 12, גובה 2", "בסיס 6, גובה 2"],
        correct: 0,
        explanation: "(6 × 4) ÷ 2 = 12 סמ\"ר"
    },
    {
        question: "במשולש חד-זוויות, הגבהים נמצאים:",
        options: ["בתוך המשולש", "מחוץ למשולש", "על הצלעות", "תלוי במשולש"],
        correct: 0,
        explanation: "במשולש חד-זוויות כל הגבהים בתוך המשולש"
    },
    {
        question: "במשולש קהה-זווית, כמה גבהים מחוץ למשולש?",
        options: ["2", "3", "1", "0"],
        correct: 0,
        explanation: "במשולש קהה-זווית 2 גבהים מחוץ למשולש"
    },
    {
        question: "שטח משולש 50 סמ\"ר. בסיס 20 ס\"מ. מה הגובה?",
        options: ["5 ס\"מ", "10 ס\"מ", "2.5 ס\"מ", "25 ס\"מ"],
        correct: 0,
        explanation: "50 = (20 × גובה) ÷ 2, לכן גובה = 5"
    },
    {
        question: "משולש ישר-זווית: ניצב 4 ס\"מ, יתר 5 ס\"מ, ניצב שני 3 ס\"מ. מה השטח?",
        options: ["6 סמ\"ר", "12 סמ\"ר", "7.5 סמ\"ר", "10 סמ\"ר"],
        correct: 0,
        explanation: "שטח = (4 × 3) ÷ 2 = 6 סמ\"ר"
    },
    {
        question: "שני משולשים בעלי צלע משותפת ואותו גובה. השטחים:",
        options: ["שווים", "שונים", "תלוי בצורה", "לא ניתן לקבוע"],
        correct: 0,
        explanation: "אותו בסיס ואותו גובה = שטחים שווים"
    },

    // Unit 6: Addition and Subtraction of Directed Numbers (Questions 66-100)
    
    {
        question: "חשבון בנק עם יתרה -200 ש\"ח. הפקדתי 350 ש\"ח. מה היתרה?",
        options: ["150 ש\"ח", "-150 ש\"ח", "550 ש\"ח", "-550 ש\"ח"],
        correct: 0,
        explanation: "-200 + 350 = 150"
    },
    {
        question: "יתרה של 500 ש\"ח. משכתי 700 ש\"ח. מה היתרה?",
        options: ["-200 ש\"ח", "200 ש\"ח", "1200 ש\"ח", "-1200 ש\"ח"],
        correct: 0,
        explanation: "500 - 700 = -200 (חוב)"
    },
    {
        question: "חוב של 400 ש\"ח. משכתי עוד 150 ש\"ח. מה היתרה?",
        options: ["-550 ש\"ח", "-250 ש\"ח", "550 ש\"ח", "250 ש\"ח"],
        correct: 0,
        explanation: "-400 - 150 = -550"
    },
    {
        question: "עומדים ב-3. הולכים 5 יחידות ימינה. איפה מגיעים?",
        options: ["8", "2", "-2", "15"],
        correct: 0,
        explanation: "3 + 5 = 8"
    },
    {
        question: "עומדים ב--2. הולכים 7 יחידות ימינה. איפה מגיעים?",
        options: ["5", "-9", "9", "-5"],
        correct: 0,
        explanation: "-2 + 7 = 5"
    },
    {
        question: "חשבו: 8 - (+5)",
        options: ["3", "13", "-3", "-13"],
        correct: 0,
        explanation: "8 - (+5) = 8 - 5 = 3"
    },
    {
        question: "חשבו: 8 - (-5)",
        options: ["13", "3", "-3", "-13"],
        correct: 0,
        explanation: "8 - (-5) = 8 + 5 = 13"
    },
    {
        question: "חשבו: -8 - (+5)",
        options: ["-13", "-3", "3", "13"],
        correct: 0,
        explanation: "-8 - (+5) = -8 - 5 = -13"
    },
    {
        question: "חשבו: -8 - (-5)",
        options: ["-3", "-13", "3", "13"],
        correct: 0,
        explanation: "-8 - (-5) = -8 + 5 = -3"
    },
    {
        question: "חשבו: 5 + (-3) + 8",
        options: ["10", "16", "0", "-6"],
        correct: 0,
        explanation: "5 - 3 + 8 = 10"
    },
    {
        question: "חשבו: -7 + 4 - 2",
        options: ["-5", "-3", "5", "9"],
        correct: 0,
        explanation: "-7 + 4 - 2 = -5"
    },
    {
        question: "חשבו: 10 - 15 + 8 - 3",
        options: ["0", "10", "-10", "20"],
        correct: 0,
        explanation: "10 - 15 + 8 - 3 = 0"
    },
    {
        question: "חשבו: -4 - 6 + 10",
        options: ["0", "20", "-20", "10"],
        correct: 0,
        explanation: "-4 - 6 + 10 = 0"
    },
    {
        question: "חשבו: 20 + (-12) - (-8) + 4",
        options: ["20", "12", "28", "4"],
        correct: 0,
        explanation: "20 - 12 + 8 + 4 = 20"
    },
    {
        question: "דרך נוחה לחשב: 25 + 37 + 75",
        options: ["(25 + 75) + 37 = 137", "25 + (37 + 75) = 137", "לא משנה", "צריך לפי הסדר"],
        correct: 0,
        explanation: "נוח לקבץ 25 + 75 = 100, ואז 100 + 37 = 137"
    },
    {
        question: "חשבו: 17 + (-17) + 8",
        options: ["8", "42", "-8", "0"],
        correct: 0,
        explanation: "מספרים נגדיים: 17 + (-17) = 0, נשאר 8"
    },
    {
        question: "כתבו בלי סוגריים: 5 + (-3)",
        options: ["5 - 3", "5 + 3", "-5 - 3", "-5 + 3"],
        correct: 0,
        explanation: "חיבור שלילי = חיסור"
    },
    {
        question: "פשטו: -3 - 4 + 7",
        options: ["0", "14", "-14", "-4"],
        correct: 0,
        explanation: "-3 - 4 + 7 = 0"
    },
    {
        question: "הטמפרטורה ירדה מ-8°C ל--3°C. בכמה ירדה?",
        options: ["11 מעלות", "5 מעלות", "-5 מעלות", "3 מעלות"],
        correct: 0,
        explanation: "מ-8 ל-0: 8 מעלות, מ-0 ל--3: 3 מעלות. סה\"כ: 11"
    },
    {
        question: "הטמפרטורה עלתה מ--5°C ל-7°C. בכמה עלתה?",
        options: ["12 מעלות", "2 מעלות", "-2 מעלות", "7 מעלות"],
        correct: 0,
        explanation: "מ--5 ל-0: 5 מעלות, מ-0 ל-7: 7 מעלות. סה\"כ: 12"
    },
    {
        question: "צולל במעמק 30 מטר. עלה 12 מטר. באיזה עומק הוא?",
        options: ["-18 מטר", "18 מטר", "-42 מטר", "42 מטר"],
        correct: 0,
        explanation: "-30 + 12 = -18 מטר (עדיין מתחת למים)"
    },
    {
        question: "מטוס בגובה 5000 מטר. ירד 2000 מטר. עלה 1500 מטר. באיזה גובה?",
        options: ["4500 מטר", "3500 מטר", "6500 מטר", "8500 מטר"],
        correct: 0,
        explanation: "5000 - 2000 + 1500 = 4500"
    },
    {
        question: "קניתי ב-250 ש\"ח. מכרתי ב-180 ש\"ח. מה הרווח/הפסד?",
        options: ["הפסד 70 ש\"ח", "רווח 70 ש\"ח", "הפסד 430 ש\"ח", "רווח 430 ש\"ח"],
        correct: 0,
        explanation: "180 - 250 = -70 (הפסד)"
    },
    {
        question: "מעלית בקומה 8. ירדה 12 קומות. עלתה 5 קומות. באיזו קומה?",
        options: ["1", "-1", "9", "25"],
        correct: 0,
        explanation: "8 - 12 + 5 = 1"
    },
    {
        question: "חשבון החל ב-100 ש\"ח. 3 משיכות של 40 ש\"ח כל אחת. מה היתרה?",
        options: ["-20 ש\"ח", "20 ש\"ח", "-220 ש\"ח", "220 ש\"ח"],
        correct: 0,
        explanation: "100 - 40 - 40 - 40 = -20"
    },
    {
        question: "פשטו: 3x + 5 - 2x",
        options: ["x + 5", "5x + 5", "x - 5", "5x"],
        correct: 0,
        explanation: "(3x - 2x) + 5 = x + 5"
    },
    {
        question: "פשטו: -4a + 7a - 3",
        options: ["3a - 3", "11a - 3", "-11a - 3", "3a + 3"],
        correct: 0,
        explanation: "(-4a + 7a) - 3 = 3a - 3"
    },
    {
        question: "פשטו: 10 - 3y + 5y",
        options: ["10 + 2y", "10 - 8y", "10 - 2y", "10 + 8y"],
        correct: 0,
        explanation: "10 + (-3y + 5y) = 10 + 2y"
    },
    {
        question: "פשטו: 2m - 5 - 4m + 8",
        options: ["-2m + 3", "6m + 3", "-2m - 3", "6m - 3"],
        correct: 0,
        explanation: "(2m - 4m) + (-5 + 8) = -2m + 3"
    },
    {
        question: "פשטו: -x - x - x",
        options: ["-3x", "3x", "-x", "0"],
        correct: 0,
        explanation: "-x - x - x = -3x"
    },
    {
        question: "חשבו: -10 - 100 - 1000",
        options: ["-1110", "1110", "-990", "990"],
        correct: 0,
        explanation: "-10 - 100 - 1000 = -1110"
    },
    {
        question: "חשבו: 7 - 11 - 3 + 8",
        options: ["1", "-1", "29", "-9"],
        correct: 0,
        explanation: "7 - 11 - 3 + 8 = 1"
    },
    {
        question: "פשטו: 5x - (3x + 2)",
        options: ["2x - 2", "8x - 2", "2x + 2", "8x + 2"],
        correct: 0,
        explanation: "5x - (3x + 2) = 5x - 3x - 2 = 2x - 2"
    },
    {
        question: "חשבו: 813 + (-27) + (-813)",
        options: ["-27", "27", "813", "-813"],
        correct: 0,
        explanation: "813 + (-813) = 0, נשאר -27"
    },
    {
        question: "מהו הנגדי של -(x - 5)?",
        options: ["x - 5", "-(x - 5)", "-x + 5", "-x - 5"],
        correct: 0,
        explanation: "הנגדי של הנגדי = המספר המקורי: x - 5"
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function initQuiz() {
    questions.forEach(q => {
        const correctAnswer = q.options[q.correct];
        q.options = shuffleArray(q.options);
        q.correct = q.options.indexOf(correctAnswer);
    });
    
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    
    document.getElementById('question-number').textContent = `שאלה ${currentQuestion + 1} מתוך ${questions.length}`;
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('progress-text').textContent = `שאלה ${currentQuestion + 1} מתוך ${questions.length}`;
    
    const progress = ((currentQuestion) / questions.length) * 100;
    document.getElementById('progress-bar').style.setProperty('--progress', `${progress}%`);
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionDiv);
    });
    
    const nextBtn = document.getElementById('next-btn');
    const skipBtn = document.getElementById('skip-btn');
    nextBtn.disabled = true;
    skipBtn.disabled = false;
    nextBtn.textContent = currentQuestion === questions.length - 1 ? 'סיים מבחן' : 'שאלה הבאה';
}

function selectOption(selectedIndex) {
    const question = questions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    options.forEach(opt => opt.classList.add('disabled'));
    options[selectedIndex].classList.add('selected');
    
    if (selectedIndex === question.correct) {
        options[selectedIndex].classList.remove('selected');
        options[selectedIndex].classList.add('correct');
        score++;
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[question.correct].classList.add('correct');
    }
    
    userAnswers[currentQuestion] = {
        selected: selectedIndex,
        correct: question.correct,
        isCorrect: selectedIndex === question.correct,
        skipped: false
    };
    
    document.getElementById('next-btn').disabled = false;
    document.getElementById('skip-btn').disabled = true;
}

function skipQuestion() {
    userAnswers[currentQuestion] = {
        selected: null,
        correct: questions[currentQuestion].correct,
        isCorrect: false,
        skipped: true
    };
    
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';
    
    // Calculate score only from answered questions
    const answeredQuestions = userAnswers.filter(ans => !ans.skipped).length;
    const correctAnswers = userAnswers.filter(ans => ans.isCorrect && !ans.skipped).length;
    const percentage = answeredQuestions > 0 ? Math.round((correctAnswers / answeredQuestions) * 100) : 0;
    
    document.getElementById('final-score').textContent = `${percentage}%`;
    
    const resultsDetails = document.getElementById('results-details');
    resultsDetails.innerHTML = `
        <h3>סיכום ציונים</h3>
        <p style="font-size: 1.3em; margin: 20px 0;">
            <strong>ציון: ${correctAnswers} נכונות מתוך ${answeredQuestions} שאלות שנענו</strong><br>
            <span style="font-size: 0.9em; color: #666;">(${questions.length - answeredQuestions} שאלות דולגו)</span>
        </p>
        <div style="margin: 30px 0;">
            ${questions.map((q, index) => {
                const userAns = userAnswers[index];
                const isCorrect = userAns.isCorrect;
                const isSkipped = userAns.skipped;
                
                return `
                    <div class="result-item ${isSkipped ? 'skipped' : (isCorrect ? 'correct' : 'incorrect')}">
                        <div class="result-question">שאלה ${index + 1}: ${q.question}</div>
                        ${isSkipped ? 
                            '<div class="result-answer" style="color: #f39c12; font-weight: bold;">השאלה דולגה</div>' :
                            `<div class="result-answer user">התשובה שלך: ${q.options[userAns.selected]}</div>
                            ${!isCorrect ? `<div class="result-answer correct-ans">תשובה נכונה: ${q.options[q.correct]}</div>` : ''}`
                        }
                        <div class="result-answer" style="color: #666; margin-top: 10px; font-style: italic;">
                            הסבר: ${q.explanation}
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('results-container').style.display = 'none';
    
    initQuiz();
}

window.onload = initQuiz;