const englishLanguage = document.getElementById('english-button');
const frenchLanguage = document.getElementById('french-button');
const chineseLanguage = document.getElementById('chinese-button');
const spanishLanguage = document.getElementById('spanish-button');
const arabicLanguage = document.getElementById('arabic-button');
const japaneseLanguage = document.getElementById('japanese-button');

englishLanguage.addEventListener('click', () => {
    toggleScreens1();
});

frenchLanguage.addEventListener('click', () => {
    changeToFrench();
    toggleScreens1();
    });

chineseLanguage.addEventListener('click', () => {
    changeToChinese();
    toggleScreens1();
    });

spanishLanguage.addEventListener('click', () => {
    changeToSpanish();
    toggleScreens1();
    });

arabicLanguage.addEventListener('click', () => {
    changeToArabic();
    toggleScreens1();
    });

japaneseLanguage.addEventListener('click', () => {
    changeToJapanese();
    toggleScreens1();
    });

const licenceKeyInput = document.querySelector("#licence-key-screen input");
const installButton1 = document.querySelector("#licence-key-screen button");
const apiKeyInput = document.querySelector("#api-key-screen input");
const installButton2 = document.querySelector("#api-key-screen button");

function changeToFrench() {
    licenceKeyInput.placeholder = "Insérez votre clé de licence";
    installButton1.textContent = "Installer";
    apiKeyInput.placeholder = "Insérez votre clé d'API Open AI";
    installButton2.textContent = "Installer";
}

function changeToChinese() {
    licenceKeyInput.placeholder = "插入许可证密钥";
    installButton1.textContent = "安装";
    apiKeyInput.placeholder = "插入您的开放式人工智能应用程序接口密钥";
    installButton2.textContent = "安装";
}

function changeToSpanish() {
    licenceKeyInput.placeholder = "Introduzca su clave de licencia";
    installButton1.textContent = "Instale";
    apiKeyInput.placeholder = "Inserte su CLAVE de la API de Open AI";
    installButton2.textContent = "Instale";
}

function changeToArabic() {
    licenceKeyInput.placeholder = "أدخل مفتاح الترخيص الخاص بك";
    installButton1.textContent = "تثبيت";
    apiKeyInput.placeholder = "أدخل مفتاح واجهة برمجة التطبيقات لـ Open AI الخاص بك";
    installButton2.textContent = "تثبيت";
}

function changeToJapanese() {
    licenceKeyInput.placeholder = "ライセンスキーを挿入する";
    installButton1.textContent = "インストール";
    apiKeyInput.placeholder = "Open AI API KEYを挿入する";
    installButton2.textContent = "インストール";
}







// SCREEN TOGGLERS

const languageScreen = document.getElementById('language-screen');
const licenceKeyScreen = document.getElementById('licence-key-screen');
const apiKeyScreen = document.getElementById('api-key-screen');

function toggleScreens1() {
    languageScreen.style.display = 'none';
    licenceKeyScreen.style.display = 'flex';
}

installButton1.addEventListener('click', () => {
    toggleScreens2();
});

function toggleScreens2() {
    licenceKeyScreen.style.display = 'none';
    apiKeyScreen.style.display = 'flex';
}