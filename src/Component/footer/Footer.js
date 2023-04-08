import "./Footer.css";
function Footer() {
  const url = "https://www.facebook.com/Travel1Jo/";
  return (
    <div className="footer">
      <a href={url} className="footerLink">
        Travel One Facbook page
      </a>
      <p>Author : Travel One company.</p>
    </div>
  );
}

export default Footer;
