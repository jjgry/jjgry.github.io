const currentPageRoot = location.pathname.split("/").slice(0, 2).join("/");

const navProps = (href) => {
  const isActive = href === currentPageRoot ? ' aria-current="page"' : "";
  return `href="${href}"${isActive}`;
};

const header = document.querySelector("[data-site-header]");
if (header) {
  header.innerHTML = `
    <div class="masthead">
      <a class="brand brand-wide" href="/">Calne Running Club</a>
      <a class="brand brand-narrow" href="/"><img src="/assets/images/crc.png" alt="Calne Running Club" /></a>
      <span>Beversbrook Sports Facility<br/>Beversbrook Road<br/>Calne SN11 9FL</span>
    </div>
    <nav aria-label="Main navigation">
      <ul>
        <li><a ${navProps("/")}>Home</a></li>
        <li><a ${navProps("/training")}>Training</a></li>
        <li><a ${navProps("/membership")}>Membership</a></li>
        <li><a ${navProps("/races")}>Fixtures &amp; Results</a></li>
        <li><a ${navProps("/about")}>About</a></li>
        <li><a ${navProps("/contact")}>Contact</a></li>
      </ul>
    </nav>`;
}

const footer = document.querySelector("[data-site-footer]");
if (footer) {
  footer.innerHTML = `
    <small class="copy">&copy; 1992–2026 Calne Running Club</small>
    <a href="https://www.facebook.com/profile.php?id=61584176430299" aria-label="Calne Running Club on Facebook">
      <img class="social" src="/assets/images/facebook.png" alt="Facebook" />
    </a>`;
}
