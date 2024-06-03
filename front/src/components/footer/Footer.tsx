import "./footer.scss";
import footerTooth from "/footerTooth.svg";
import footerHand from "/footerHand.svg";
import footerBottom from "/footerBottom.svg";

const Footer = () => {
  const address = "UQDq12cOxqe5uKfFuvx8OQ4b9enobIccOBZaZbUjbXpovPrY";

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section id="JoinClub" className="footer">
      <img className="footerHand" src={footerHand} alt="image" />
      <img className="footerTooth" src={footerTooth} alt="image" />
      <a href="https://t.me/TulerDyrdenTON">
        <button className="tgButton">Join Fight Club</button>
      </a>
      <div className="textBlock">
        <p>
          *send min of 25 Ton or the equivalent in other tokens with liquidity
          to{" "}
        </p>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => copyToClipboard(address)}
        >
          {address}
        </p>
        <p>
          please use non-custodial wallets like Tonkeeper instead of exchanges.
        </p>
        <p>
          Once the mark is reached, all news will be show on our TG channel -
          @TulerDyrdenTON<br></br>Do not trust anyone other than club members.
        </p>
      </div>
      <img className="footerBottom" src={footerBottom} alt="image" />
    </section>
  );
};

export default Footer;
