if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let lastSparkleAt = 0;
    document.addEventListener("pointermove", event => {
        const now = performance.now();
        if (now - lastSparkleAt < 45) return;
        lastSparkleAt = now;

        const sparkle = document.createElement("span");
        sparkle.className = "sparkle";
        sparkle.textContent = Math.random() > 0.5 ? "✦" : "✧";
        sparkle.style.left = `${event.clientX}px`;
        sparkle.style.top = `${event.clientY}px`;
        sparkle.style.setProperty("--drift", `${Math.round(Math.random() * 36 - 18)}px`);
        document.body.appendChild(sparkle);
        sparkle.addEventListener("animationend", () => sparkle.remove(), { once: true });
    });
}
