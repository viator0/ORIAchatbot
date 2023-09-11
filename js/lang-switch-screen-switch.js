const englishLanguage = document.getElementById('english-button');
const frenchLanguage = document.getElementById('french-button');
const chineseLanguage = document.getElementById('chinese-button');
const spanishLanguage = document.getElementById('spanish-button');
const arabicLanguage = document.getElementById('arabic-button');
const japaneseLanguage = document.getElementById('japanese-button');

//switch language screen and apply language

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


//LANGUAGE FUNCTIONS

const licenceKeyInput = document.querySelector("#licence-key-screen input");
const installButton1 = document.querySelector("#licence-key-screen button");
const apiKeyInput = document.querySelector("#api-key-screen input");
const installButton2 = document.querySelector("#api-key-screen button");
const sendButton = document.querySelector("#send-button");
const article1 = document.querySelector("#example-prompts article:nth-child(1)");
const article2 = document.querySelector("#example-prompts article:nth-child(2)");
const article3 = document.querySelector("#example-prompts article:nth-child(3)");

function changeToFrench() {
    licenceKeyInput.placeholder = "Insérez votre clé de licence";
    installButton1.textContent = "Installer";
    apiKeyInput.placeholder = "Insérez votre clé d'API Open AI";
    installButton2.textContent = "Installer";
    sendButton.textContent = "Envoyer";
    article1.textContent = "Organise mon bureau en créant un dossier et en y plaçant toutes mes captures d'écran.";
    article2.textContent = "Scrappez le site web que je vous envoie";
    article3.textContent = "Transforme mon ordinateur en mode sombre";
}

function changeToChinese() {
    licenceKeyInput.placeholder = "插入许可证密钥";
    installButton1.textContent = "安装";
    apiKeyInput.placeholder = "插入您的开放式人工智能应用程序接口密钥";
    installButton2.textContent = "安装";
    sendButton.textContent = "发送";
    article1.textContent = "创建一个文件夹，把所有截图都放进去，整理我的桌面。";
    article2.textContent = "刮开我发给你的网站";
    article3.textContent = "在黑暗模式下改造我的电脑";
}

function changeToSpanish() {
    licenceKeyInput.placeholder = "Introduzca su clave de licencia";
    installButton1.textContent = "Instale";
    apiKeyInput.placeholder = "Inserte su CLAVE de la API de Open AI";
    installButton2.textContent = "Instale";
    sendButton.textContent = "Enviar";
    article1.textContent = "Organizar mi escritorio creando una carpeta y colocando en ella todas mis capturas de pantalla.";
    article2.textContent = "Scrappe el sitio web que te envío";
    article3.textContent = "Transformar mi ordenador en modo oscuro";
}

function changeToArabic() {
    licenceKeyInput.placeholder = "أدخل مفتاح الترخيص الخاص بك";
    installButton1.textContent = "تثبيت";
    apiKeyInput.placeholder = "أدخل مفتاح واجهة برمجة التطبيقات لـ Open AI الخاص بك";
    installButton2.textContent = "تثبيت";
    sendButton.textContent = "إرسال";
    article1.textContent = "نظّم سطح مكتبي عن طريق إنشاء مجلد ووضع جميع صور الشاشة فيه.";
    article2.textContent = "استخرج المعلومات من الموقع الذي أرسلته لك.";
    article3.textContent = "حول حاسوبي إلى وضع الظلام.";
}

function changeToJapanese() {
    licenceKeyInput.placeholder = "ライセンスキーを挿入する";
    installButton1.textContent = "インストール";
    apiKeyInput.placeholder = "Open AI API KEYを挿入する";
    installButton2.textContent = "インストール";
    sendButton.textContent = "送信";
    article1.textContent = "フォルダを作成し、スクリーンショットをすべて入れてデスクトップを整理する。";
    article2.textContent = "私が送ったウェブサイトをスクラップする";
    article3.textContent = "コンピュータをダークモードにする";
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

installButton2.addEventListener('click', () => {
    toggleScreens3();
});

const mainScreen = document.querySelector('main');
const fixedThemeSwitcher = document.querySelector('#fixed-theme-switcher');
const body = document.querySelector('body');

function toggleScreens3() {
    apiKeyScreen.style.display = 'none';
    mainScreen.style.display = 'block';
    fixedThemeSwitcher.style.display = 'none';
    body.style.display = 'block';
}