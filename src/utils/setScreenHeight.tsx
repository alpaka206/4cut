export default function setScreenHeight() {
  if (typeof window !== "undefined") {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
}
