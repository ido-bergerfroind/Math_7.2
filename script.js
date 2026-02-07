// Math Exam - 100 Questions from 4 Units
// Unit 2: Numbers on Number Line, Unit 3: Multiplication/Division
// Unit 5: Triangle Area, Unit 6: Addition/Subtraction

const questions = [
    // Unit 2: Numbers and Operations on Number Line (Questions 1-25)
    // Based on pages 27-41 only
    
    // Fractions on Number Line (pages 27-30)
    {
        question: "-2, -1.5, ___, -0.5, 0",
        options: ["-1", "-2.5", "0", "-0.25"],
        correct: 0,
        explanation: "דילוגים של 0.5, לכן -1 הוא המספר החסר"
    },
    {
        question: "1, 1/2, 0, ___, -1",
        options: ["-1/2", "1/4", "-1/4", "-2"],
        correct: 0,
        explanation: "דילוגים של -1/2, לכן -1/2 הוא המספר החסר"
    },
    {
        question: "3/4 ___ 1/4",
        options: [">", "<", "=", "≠"],
        correct: 0,
        explanation: "3/4 גדול מ-1/4 כי הוא ימינה יותר על הציר"
    },
    {
        question: "-3/4 ___ -1/4",
        options: ["<", ">", "=", "≠"],
        correct: 0,
        explanation: "-3/4 קטן מ--1/4 כי הוא שמאלה יותר על הציר"
    },
    {
        question: "1/4 < ___ < 1/2",
        options: ["3/8", "1/8", "5/8", "3/4"],
        correct: 0,
        explanation: "1/4 = 2/8, 1/2 = 4/8, לכן 3/8 נמצא ביניהם"
    },

    // Order Preservation & Opposite Numbers (pages 31-36)
    {
        question: "a > b → (a + 5) ___ (b + 5)",
        options: ["a + 5 > b + 5", "a + 5 < b + 5", "a + 5 = b + 5", "לא ניתן לקבוע"],
        correct: 0,
        explanation: "הסדר נשמר בחיבור: a + 5 > b + 5"
    },
    {
        question: "-(-7) = ?",
        options: ["7", "-7", "0", "14"],
        correct: 0,
        explanation: "הנגדי של מספר שלילי הוא מספר חיובי: -(-7) = 7"
    },
    {
        question: "a + (-a) = ?",
        options: ["0", "2a", "-2a", "a"],
        correct: 0,
        explanation: "מספר והנגדי שלו תמיד נותנים 0"
    },
    {
        question: "15 - (8 + 3) = ?",
        options: ["4", "26", "20", "6"],
        correct: 0,
        explanation: "15 - (8 + 3) = 15 - 8 - 3 = 4"
    },
    {
        question: "20 - (12 - 5) = ?",
        options: ["13", "3", "27", "7"],
        correct: 0,
        explanation: "20 - (12 - 5) = 20 - 12 + 5 = 13"
    },
    {
        question: "a - (b + c) = ?",
        options: ["a - b - c", "a + b + c", "a - b + c", "a + b - c"],
        correct: 0,
        explanation: "חיסור סכום = חיסור כל מחובר: a - (b + c) = a - b - c"
    },
    {
        question: "10 - (-3 + 7) = ?",
        options: ["6", "20", "14", "4"],
        correct: 0,
        explanation: "10 - (-3 + 7) = 10 + 3 - 7 = 6"
    },
    {
        question: "x - (y - z) = ?",
        options: ["x - y + z", "x - y - z", "x + y - z", "x + y + z"],
        correct: 0,
        explanation: "x - (y - z) = x - y + z"
    },
    {
        question: "-(a + 5) ___ -a - 5",
        options: ["=", ">", "<", "≠"],
        correct: 0,
        explanation: "הנגדי לסכום שווה לסכום הנגדיים: -(a + 5) = -a + (-5) = -a - 5"
    },
    {
        question: "(2/3 + 1/4) ___ (2/3 + 1/5)",
        options: [">", "<", "=", "≥"],
        correct: 0,
        explanation: "1/4 > 1/5, לכן הסכום הראשון גדול יותר"
    },
    {
        question: "x < y → (x - 3) ___ (y - 3)",
        options: ["x - 3 < y - 3", "x - 3 > y - 3", "x - 3 = y - 3", "לא ניתן לקבוע"],
        correct: 0,
        explanation: "חיסור (חיבור הנגדי) שומר על הסדר"
    },
    {
        question: "(-1/2 + 3) ___ (-1/3 + 3)",
        options: ["<", ">", "=", "≤"],
        correct: 0,
        explanation: "-1/2 < -1/3, ולכן גם -1/2 + 3 < -1/3 + 3"
    },
    {
        question: "-(3 + 5) = ?",
        options: ["-8", "8", "-3 - 5", "-3 + 5"],
        correct: 0,
        explanation: "-(3 + 5) = -8"
    },
    {
        question: "a = -5 → -a = ?",
        options: ["5", "-5", "10", "-10"],
        correct: 0,
        explanation: "-a = -(-5) = 5"
    },
    {
        question: "-1/2, -3/4, -1/4, 0 (קטן → גדול)",
        options: ["-3/4, -1/2, -1/4, 0", "-1/4, -1/2, -3/4, 0", "0, -1/4, -1/2, -3/4", "-3/4, -1/4, -1/2, 0"],
        correct: 0,
        explanation: "ככל שרחוקים יותר מאפס בכיוון שלילי, המספר קטן יותר"
    },
    {
        question: "-1/3 ___ -1/2",
        options: [">", "<", "=", "לא ניתן להשוות"],
        correct: 0,
        explanation: "-1/3 קרוב יותר לאפס, לכן -1/3 > -1/2"
    },
    {
        question: "-1/10, -1/2, -2/3, -3/4 (קרוב ל-0)",
        options: ["-1/10", "-1/2", "-2/3", "-3/4"],
        correct: 0,
        explanation: "-1/10 הוא הקרוב ביותר לאפס מבין השברים השליליים"
    },
    {
        question: "0 ← 1/5 → 1 (כמה חלקים?)",
        options: ["5", "4", "6", "10"],
        correct: 0,
        explanation: "1 ÷ (1/5) = 5 חלקים"
    },
    {
        question: "-3 < -1 → (-3 + 10) ___ (-1 + 10)",
        options: ["-3 + 10 < -1 + 10", "-3 + 10 > -1 + 10", "-3 + 10 = -1 + 10", "תלוי במספרים"],
        correct: 0,
        explanation: "חיבור שומר על הסדר: 7 < 9"
    },
    {
        question: "-3 + 7 = ?",
        options: ["4", "10", "-10", "-4"],
        correct: 0,
        explanation: "-3 + 7 = 4"
    },

    // Unit 3: Multiplication and Division (Questions 26-50)
    
    {
        question: "(-5) × 8 = ?",
        options: ["-40", "40", "-13", "13"],
        correct: 0,
        explanation: "מספר שלילי כפול מספר חיובי = מספר שלילי"
    },
    {
        question: "(-7) × (-6) = ?",
        options: ["42", "-42", "13", "-13"],
        correct: 0,
        explanation: "מספר שלילי כפול מספר שלילי = מספר חיובי"
    },
    {
        question: "9 × (-4) = ?",
        options: ["-36", "36", "-13", "5"],
        correct: 0,
        explanation: "מספר חיובי כפול מספר שלילי = מספר שלילי"
    },
    {
        question: "(-12) × 0 = ?",
        options: ["0", "-12", "12", "לא מוגדר"],
        correct: 0,
        explanation: "כל מספר כפול 0 שווה 0"
    },
    {
        question: "(-1) × 15 = ?",
        options: ["-15", "15", "-16", "14"],
        correct: 0,
        explanation: "כפל ב-(-1) נותן את המספר הנגדי"
    },
    {
        question: "(-2) × 3 × (-4) = ?",
        options: ["24", "-24", "6", "-6"],
        correct: 0,
        explanation: "מספר זוגי של גורמים שליליים = תוצאה חיובית"
    },
    {
        question: "(-1) × (-1) × (-1) = ?",
        options: ["-1", "1", "0", "-3"],
        correct: 0,
        explanation: "מספר אי-זוגי של גורמים שליליים = תוצאה שלילית"
    },
    {
        question: "(-) × (-) × ... = (+) ← כמה גורמים?",
        options: ["מספר זוגי", "מספר אי-זוגי", "לפחות 2", "בדיוק 1"],
        correct: 0,
        explanation: "מספר זוגי של גורמים שליליים נותן תוצאה חיובית"
    },
    {
        question: "(-3)² = ?",
        options: ["9", "-9", "6", "-6"],
        correct: 0,
        explanation: "(-3)² = (-3) × (-3) = 9 (מעריך זוגי)"
    },
    {
        question: "(-2)³ = ?",
        options: ["-8", "8", "-6", "6"],
        correct: 0,
        explanation: "(-2)³ = (-2) × (-2) × (-2) = -8 (מעריך אי-זוגי)"
    },
    {
        question: "(-1)⁵ = ?",
        options: ["-1", "1", "0", "-5"],
        correct: 0,
        explanation: "מעריך אי-זוגי: (-1)⁵ = -1"
    },
    {
        question: "(-1)¹⁰⁰ = ?",
        options: ["1", "-1", "100", "-100"],
        correct: 0,
        explanation: "מעריך זוגי: (-1)¹⁰⁰ = 1"
    },
    {
        question: "(-2)⁴ ___ -2⁴",
        options: [">", "<", "=", "≠"],
        correct: 0,
        explanation: "(-2)⁴ = 16, -2⁴ = -16, לכן 16 > -16"
    },
    {
        question: "20 ÷ (-4) = ?",
        options: ["-5", "5", "-24", "24"],
        correct: 0,
        explanation: "מחולק חיובי חלקי מחלק שלילי = מנה שלילית"
    },
    {
        question: "(-36) ÷ (-9) = ?",
        options: ["4", "-4", "45", "-45"],
        correct: 0,
        explanation: "מחולק שלילי חלקי מחלק שלילי = מנה חיובית"
    },
    {
        question: "(-15) ÷ 3 = ?",
        options: ["-5", "5", "-18", "18"],
        correct: 0,
        explanation: "מחולק שלילי חלקי מחלק חיובי = מנה שלילית"
    },
    {
        question: "0 ÷ (-7) = ?",
        options: ["0", "-7", "7", "לא מוגדר"],
        correct: 0,
        explanation: "0 חלקי כל מספר (שאינו 0) = 0"
    },
    {
        question: "(-1/3)⁻¹ = ?",
        options: ["-3", "3", "-1/3", "1/3"],
        correct: 0,
        explanation: "ההופכי של -1/3 הוא -3 (כי -1/3 × -3 = 1)"
    },
    {
        question: "(-5)⁻¹ = ?",
        options: ["-1/5", "1/5", "5", "-5"],
        correct: 0,
        explanation: "ההופכי של -5 הוא -1/5"
    },
    {
        question: "a × a⁻¹ = ?",
        options: ["1", "0", "המספר עצמו", "תלוי במספר"],
        correct: 0,
        explanation: "מספר כפול ההופכי שלו תמיד שווה 1"
    },
    {
        question: "5 - 3 × 2 = ?",
        options: ["-1", "4", "1", "6"],
        correct: 0,
        explanation: "כפל קודם לחיסור: 5 - 6 = -1"
    },
    {
        question: "(5 - 3) × 2 = ?",
        options: ["4", "-1", "1", "6"],
        correct: 0,
        explanation: "סוגריים קודמים: 2 × 2 = 4"
    },
    {
        question: "-2 + 3 × (-4) = ?",
        options: ["-14", "-4", "4", "14"],
        correct: 0,
        explanation: "כפל קודם: -2 + (-12) = -14"
    },
    {
        question: "10 ÷ 2 + 3 = ?",
        options: ["8", "2", "13", "5"],
        correct: 0,
        explanation: "חילוק קודם: 5 + 3 = 8"
    },
    {
        question: "(3, -2) ← רביע?",
        options: ["IV", "I", "II", "III"],
        correct: 0,
        explanation: "x חיובי, y שלילי = רביע IV"
    },

    // Unit 5: Triangle Area (Questions 51-65) - 15 questions
    {
        question: "(6 × 8) ÷ 2 = ?",
        options: ["24 סמ\"ר", "48 סמ\"ר", "14 סמ\"ר", "32 סמ\"ר"],
        correct: 0,
        explanation: "שטח = (6 × 8) ÷ 2 = 24 סמ\"ר"
    },
    {
        question: "(10 × 5) ÷ 2 = ?",
        options: ["25 סמ\"ר", "50 סמ\"ר", "15 סמ\"ר", "20 סמ\"ר"],
        correct: 0,
        explanation: "שטח משולש = (בסיס × גובה) ÷ 2 = (10 × 5) ÷ 2 = 25"
    },
    {
        question: "30 = (10 × h) ÷ 2 → h = ?",
        options: ["6 ס\"מ", "3 ס\"מ", "12 ס\"מ", "15 ס\"מ"],
        correct: 0,
        explanation: "30 = (10 × גובה) ÷ 2, לכן גובה = 6"
    },
    {
        question: "(4×6) ___ (4×6÷2)",
        options: ["שטח המלבן פי 2", "שטחים שווים", "שטח המשולש פי 2", "תלוי במידות"],
        correct: 0,
        explanation: "שטח מלבן = 24, שטח משולש = 12, המלבן פי 2"
    },
    {
        question: "18 = (6 × b) ÷ 2 → b = ?",
        options: ["6 ס\"מ", "3 ס\"מ", "9 ס\"מ", "12 ס\"מ"],
        correct: 0,
        explanation: "18 = (6 × ניצב) ÷ 2, לכן ניצב = 6"
    },
    {
        question: "△ ← כמה גבהים?",
        options: ["3", "1", "2", "תלוי בסוג"],
        correct: 0,
        explanation: "לכל משולש 3 גבהים - אחד לכל צלע"
    },
    {
        question: "△ ∟ ← ניצבים =",
        options: ["גם גבהים", "רק צלעות", "רק זווית", "לא גבהים"],
        correct: 0,
        explanation: "הניצבים במשולש ישר-זווית מהווים גם גבהים"
    },
    {
        question: "40 = (16 × h) ÷ 2 → h = ?",
        options: ["5 ס\"מ", "10 ס\"מ", "2.5 ס\"מ", "20 ס\"מ"],
        correct: 0,
        explanation: "40 = (16 × גובה) ÷ 2, לכן גובה = 5"
    },
    {
        question: "△₁(b,h) = △₂(b,h) → שטח?",
        options: ["שווים", "שונים", "תלוי בזוויות", "לא ניתן לקבוע"],
        correct: 0,
        explanation: "שטח תלוי רק בבסיס ובגובה, לכן שטחים שווים"
    },
    {
        question: "S = 12 → אפשרי?",
        options: ["בסיס 6, גובה 4", "בסיס 3, גובה 4", "בסיס 12, גובה 2", "בסיס 6, גובה 2"],
        correct: 0,
        explanation: "(6 × 4) ÷ 2 = 12 סמ\"ר"
    },
    {
        question: "△ חד-זוויות ← גבהים?",
        options: ["בתוך המשולש", "מחוץ למשולש", "על הצלעות", "תלוי במשולש"],
        correct: 0,
        explanation: "במשולש חד-זוויות כל הגבהים בתוך המשולש"
    },
    {
        question: "△ קהה-זווית ← כמה גבהים מחוץ?",
        options: ["2", "3", "1", "0"],
        correct: 0,
        explanation: "במשולש קהה-זווית 2 גבהים מחוץ למשולש"
    },
    {
        question: "50 = (20 × h) ÷ 2 → h = ?",
        options: ["5 ס\"מ", "10 ס\"מ", "2.5 ס\"מ", "25 ס\"מ"],
        correct: 0,
        explanation: "50 = (20 × גובה) ÷ 2, לכן גובה = 5"
    },
    {
        question: "(4 × 3) ÷ 2 = ?",
        options: ["6 סמ\"ר", "12 סמ\"ר", "7.5 סמ\"ר", "10 סמ\"ר"],
        correct: 0,
        explanation: "שטח = (4 × 3) ÷ 2 = 6 סמ\"ר"
    },
    {
        question: "△₁(b,h) = △₂(b,h) → שטח?",
        options: ["שווים", "שונים", "תלוי בצורה", "לא ניתן לקבוע"],
        correct: 0,
        explanation: "אותו בסיס ואותו גובה = שטחים שווים"
    },

    // Unit 6: Addition and Subtraction of Directed Numbers (Questions 66-100)
    
    {
        question: "-200 + 350 = ?",
        options: ["150 ש\"ח", "-150 ש\"ח", "550 ש\"ח", "-550 ש\"ח"],
        correct: 0,
        explanation: "-200 + 350 = 150"
    },
    {
        question: "500 - 700 = ?",
        options: ["-200 ש\"ח", "200 ש\"ח", "1200 ש\"ח", "-1200 ש\"ח"],
        correct: 0,
        explanation: "500 - 700 = -200 (חוב)"
    },
    {
        question: "-400 - 150 = ?",
        options: ["-550 ש\"ח", "-250 ש\"ח", "550 ש\"ח", "250 ש\"ח"],
        correct: 0,
        explanation: "-400 - 150 = -550"
    },
    {
        question: "3 + 5 = ?",
        options: ["8", "2", "-2", "15"],
        correct: 0,
        explanation: "3 + 5 = 8"
    },
    {
        question: "-2 + 7 = ?",
        options: ["5", "-9", "9", "-5"],
        correct: 0,
        explanation: "-2 + 7 = 5"
    },
    {
        question: "8 - (+5) = ?",
        options: ["3", "13", "-3", "-13"],
        correct: 0,
        explanation: "8 - (+5) = 8 - 5 = 3"
    },
    {
        question: "8 - (-5) = ?",
        options: ["13", "3", "-3", "-13"],
        correct: 0,
        explanation: "8 - (-5) = 8 + 5 = 13"
    },
    {
        question: "-8 - (+5) = ?",
        options: ["-13", "-3", "3", "13"],
        correct: 0,
        explanation: "-8 - (+5) = -8 - 5 = -13"
    },
    {
        question: "-8 - (-5) = ?",
        options: ["-3", "-13", "3", "13"],
        correct: 0,
        explanation: "-8 - (-5) = -8 + 5 = -3"
    },
    {
        question: "5 + (-3) + 8 = ?",
        options: ["10", "16", "0", "-6"],
        correct: 0,
        explanation: "5 - 3 + 8 = 10"
    },
    {
        question: "-7 + 4 - 2 = ?",
        options: ["-5", "-3", "5", "9"],
        correct: 0,
        explanation: "-7 + 4 - 2 = -5"
    },
    {
        question: "10 - 15 + 8 - 3 = ?",
        options: ["0", "10", "-10", "20"],
        correct: 0,
        explanation: "10 - 15 + 8 - 3 = 0"
    },
    {
        question: "-4 - 6 + 10 = ?",
        options: ["0", "20", "-20", "10"],
        correct: 0,
        explanation: "-4 - 6 + 10 = 0"
    },
    {
        question: "20 + (-12) - (-8) + 4 = ?",
        options: ["20", "12", "28", "4"],
        correct: 0,
        explanation: "20 - 12 + 8 + 4 = 20"
    },
    {
        question: "25 + 37 + 75 = ?",
        options: ["(25 + 75) + 37 = 137", "25 + (37 + 75) = 137", "לא משנה", "צריך לפי הסדר"],
        correct: 0,
        explanation: "נוח לקבץ 25 + 75 = 100, ואז 100 + 37 = 137"
    },
    {
        question: "17 + (-17) + 8 = ?",
        options: ["8", "42", "-8", "0"],
        correct: 0,
        explanation: "מספרים נגדיים: 17 + (-17) = 0, נשאר 8"
    },
    {
        question: "5 + (-3) = ?",
        options: ["5 - 3", "5 + 3", "-5 - 3", "-5 + 3"],
        correct: 0,
        explanation: "חיבור שלילי = חיסור"
    },
    {
        question: "-3 - 4 + 7 = ?",
        options: ["0", "14", "-14", "-4"],
        correct: 0,
        explanation: "-3 - 4 + 7 = 0"
    },
    {
        question: "8°C → -3°C (ירידה?)",
        options: ["11 מעלות", "5 מעלות", "-5 מעלות", "3 מעלות"],
        correct: 0,
        explanation: "מ-8 ל-0: 8 מעלות, מ-0 ל--3: 3 מעלות. סה\"כ: 11"
    },
    {
        question: "-5°C → 7°C (עלייה?)",
        options: ["12 מעלות", "2 מעלות", "-2 מעלות", "7 מעלות"],
        correct: 0,
        explanation: "מ--5 ל-0: 5 מעלות, מ-0 ל-7: 7 מעלות. סה\"כ: 12"
    },
    {
        question: "-30 + 12 = ?",
        options: ["-18 מטר", "18 מטר", "-42 מטר", "42 מטר"],
        correct: 0,
        explanation: "-30 + 12 = -18 מטר (עדיין מתחת למים)"
    },
    {
        question: "5000 - 2000 + 1500 = ?",
        options: ["4500 מטר", "3500 מטר", "6500 מטר", "8500 מטר"],
        correct: 0,
        explanation: "5000 - 2000 + 1500 = 4500"
    },
    {
        question: "180 - 250 = ?",
        options: ["הפסד 70 ש\"ח", "רווח 70 ש\"ח", "הפסד 430 ש\"ח", "רווח 430 ש\"ח"],
        correct: 0,
        explanation: "180 - 250 = -70 (הפסד)"
    },
    {
        question: "8 - 12 + 5 = ?",
        options: ["1", "-1", "9", "25"],
        correct: 0,
        explanation: "8 - 12 + 5 = 1"
    },
    {
        question: "100 - 40 - 40 - 40 = ?",
        options: ["-20 ש\"ח", "20 ש\"ח", "-220 ש\"ח", "220 ש\"ח"],
        correct: 0,
        explanation: "100 - 40 - 40 - 40 = -20"
    },
    {
        question: "3x + 5 - 2x = ?",
        options: ["x + 5", "5x + 5", "x - 5", "5x"],
        correct: 0,
        explanation: "(3x - 2x) + 5 = x + 5"
    },
    {
        question: "-4a + 7a - 3 = ?",
        options: ["3a - 3", "11a - 3", "-11a - 3", "3a + 3"],
        correct: 0,
        explanation: "(-4a + 7a) - 3 = 3a - 3"
    },
    {
        question: "10 - 3y + 5y = ?",
        options: ["10 + 2y", "10 - 8y", "10 - 2y", "10 + 8y"],
        correct: 0,
        explanation: "10 + (-3y + 5y) = 10 + 2y"
    },
    {
        question: "2m - 5 - 4m + 8 = ?",
        options: ["-2m + 3", "6m + 3", "-2m - 3", "6m - 3"],
        correct: 0,
        explanation: "(2m - 4m) + (-5 + 8) = -2m + 3"
    },
    {
        question: "-x - x - x = ?",
        options: ["-3x", "3x", "-x", "0"],
        correct: 0,
        explanation: "-x - x - x = -3x"
    },
    {
        question: "-10 - 100 - 1000 = ?",
        options: ["-1110", "1110", "-990", "990"],
        correct: 0,
        explanation: "-10 - 100 - 1000 = -1110"
    },
    {
        question: "7 - 11 - 3 + 8 = ?",
        options: ["1", "-1", "29", "-9"],
        correct: 0,
        explanation: "7 - 11 - 3 + 8 = 1"
    },
    {
        question: "5x - (3x + 2) = ?",
        options: ["2x - 2", "8x - 2", "2x + 2", "8x + 2"],
        correct: 0,
        explanation: "5x - (3x + 2) = 5x - 3x - 2 = 2x - 2"
    },
    {
        question: "813 + (-27) + (-813) = ?",
        options: ["-27", "27", "813", "-813"],
        correct: 0,
        explanation: "813 + (-813) = 0, נשאר -27"
    },
    {
        question: "-(-(x - 5)) = ?",
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
