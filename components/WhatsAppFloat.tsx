import { whatsapp } from "@/content/site";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFloat() {
  return (
    <div className="wa-float">
      <a className="wa-float__btn" href={whatsapp.float} target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">
        <WhatsAppIcon />
      </a>
      <span className="wa-float__text" aria-hidden="true">
        Need Help?
      </span>
    </div>
  );
}
