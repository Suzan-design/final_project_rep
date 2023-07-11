var textArrayEn = ["ENG. Suzan Adnan Alkhdr"];
var textArrayAr = ["م. سوزان عدنان الخضر"]
var textArrayIndex = 0;
var charIndex = 0;
var enbtn = document.getElementById("en");
var arbtn = document.getElementById("ar");
const elements = document.querySelectorAll("[data-trans]");
var typedTextSpan = document.querySelector(".typed-text");
var cursorSpan = document.querySelector(".cursor");
var body = document.getElementById("body");

const translations = {
    en: {
        name: "ENG. Suzan Adnan Alkhdr",
        about: "I studied Information Technology in Al-Baath university in department of software engineering and information systems",
        contact: "CONTACT",
        phone: "+963 93762517",
        location: "Al-mezza, Damascus, Syria",
        birthday: "23/2/1998",
        education: "EDUCATION",
        university: "Al-Baath University - Bachelor Of Engineering",
        college: "(Informatin Technology In Department Of Software Engineering And Information Systems)",
        language: "LANGUAGES",
        arabic: "Arabic",
        english: "English",
        hobbies: "HOBBIES",
        hobb_title1: "Improvement:",
        hobb_detail1: " I Always Look For Self-development To Provide The Best To My Work And Organization",
        hobb_title2: " Learn New Techniques:",
        hobb_detail2: " Keep Up With New Techniques And Programming Languages",
        experience: "EXPERIENCES",
        software_developer: "Software Developer - Freelancer",
        detail1: "I have worked as freelancer for five years in many domains: ",
        detail2: "1. java desktop applications",
        detail3: "2. websites using laravel framework ",
        detail4: "3. working with many types of database(oracle , mySql , mongoDB)",
        detail5: "4. working with rest api",
        Front_end: "Front-end Developer - Freelancer",
        Front_end_detail: "I'm creates websites and applications interfaces using web languages HTML, CSS, and JavaScript with React js frameworke ",
        researcher: "Researcher and Developer - DS Enterprise",
        researcher_detail: "Responsible for developing the company's websites and suggesting updates and additions to improve them with the implementation mechanism",
        laravel: "Laravel Developer - Trainee",
        laravel_detail: "I have been training at Renewable Systems Company since 10/6/2023",
        skills: "SKILLS",
    },
    ar: {
        name: "م. سوزان عدنان الخضر",
        about: "درست الهندسة المعلوماتية في جامعة البعث قسم هندسة البرمجيات ونظم المعلومات",
        contact: "للتواصل",
        phone: "+963 93762517",
        location: "المزة, دمشق, سوريا",
        birthday: "23/2/1998",
        education: "التعليم",
        university: "جامعة البعث - بكالوريوس في الهندسة",
        college: "(هندسة معلوماتية قسم هندسة البرمجيات ونظم المعلومات)",
        language: "اللغات",
        arabic: "العربية",
        english: "الانجليزية",
        hobbies: "الاهتمامات",
        hobb_title1: "التحسين:",
        hobb_detail1: "أبحث دائمًا عن التطوير الذاتي لتقديم الأفضل لعملي ومنظمتي ",
        hobb_title2: "تعلم تقنيات جديدة:",
        hobb_detail2: "مواكبة التقنيات الجديدة ولغات البرمج",
        experience: "الخبرات",
        software_developer: "مطور برامج - مستقل",
        detail1: "لقد عملت كمستقل لمدة خمس سنوات في العديد من المجالات:",
        detail2: "1. تطبيقات سطح المكتب باستخدام جافا ",
        detail3: "  2. مواقع الويب التي تستخدم إطار عمل لارافيل ",
        detail4: "3. العمل مع أنواع عديدة من قواعد البيانات  ",
        detail5: "4. العمل مع واجهة برمجة التطبيقات",
        Front_end: "مطور الواجهة الأمامية - مستقل",
        Front_end_detail: "أقوم بإنشاء واجهات مواقع الويب والتطبيقات باستخدام لغات الويب باستخدام اطار العمل ريأكت",
        researcher: "باحث ومطور - دس انتربرايز",
        researcher_detail: "مسؤول عن تطوير مواقع الشركة واقتراح التحديثات والإضافات لتحسينها مع آلية التنفيذ",
        laravel: "مطور لارافيل - متدرب",
        laravel_detail: "أنا أتدرب في شركة الأنظمة المتجددة منذ 10/6/2023",
        skills: "المهارات",
    },
};


enbtn.onclick = function () {

    elements.forEach((element) => {
        const translationKey = element.getAttribute("data-trans");
        element.textContent = translations["en"][translationKey];
    });
    document.dir = "ltr";
    setTimeout(typingEn, 2000);
}


arbtn.onclick = function () {

    elements.forEach((element) => {
        const translationKey = element.getAttribute("data-trans");
        element.textContent = translations["ar"][translationKey];
    });
    document.dir = "rtl";
}

$("figure").onmouseout(
    function () {
        $(this).removeClass("hover");
    }
);