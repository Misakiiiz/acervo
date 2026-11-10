const installButton = document.getElementById("installAppButton");
const mobileScreen = window.matchMedia("(max-width: 800px)");
let installPrompt = null;

function isAppInstalled(){
    return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

function updateInstallButton(){
    if (installButton) installButton.hidden = !mobileScreen.matches || isAppInstalled();
}

updateInstallButton();
if (mobileScreen.addEventListener) mobileScreen.addEventListener("change", updateInstallButton);
else mobileScreen.addListener(updateInstallButton);

window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    installPrompt = event;
});

window.addEventListener("appinstalled", () => {
    installPrompt = null;
    updateInstallButton();
});

if (installButton) {
    installButton.addEventListener("click", async () => {
        if (!installPrompt) {
            window.alert(t("install.help"));
            return;
        }

        const prompt = installPrompt;
        installPrompt = null;
        try {
            await prompt.prompt();
            await prompt.userChoice;
        } catch (error) {
            console.error("Não foi possível abrir a instalação do aplicativo.", error);
        }
    });
}

if ("serviceWorker" in navigator && window.isSecureContext) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .catch(error => console.error("Não foi possível registrar o service worker.", error));
    });
}
