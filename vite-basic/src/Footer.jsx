export function Footer() {
  return (
    <div id="footer">
      <button
        onClick={() => {
          document.querySelector("h2").innerText = "Howdy!";
        }}
      >
        Click me to learn more!
      </button>
    </div>
  );
}
