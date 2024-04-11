import whastappLogo from "../assets/whatsApp.svg.webp";
export default function Enquire({ navToggle }) {
  const phoneNumber = 9701322094;

  const handleWhatsAppClick = () => {
    const whatsAppLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsAppLink);
  };

  return (
    <div
      className={`abosolute fixed right-0 bottom-28  ${
        navToggle ? "bg-[#FEFAE0]" : "bg-[#BC6C25]"
      } p-2 rounded-l-lg flex items-center gap-2 z-10 `}
    >
      <img
        className="h-6 hover:cursor-pointer"
        src={whastappLogo}
        alt="whatsapp logo"
        onClick={handleWhatsAppClick}
      />
      <h3 className={navToggle ? "text-[#BC6C25]" : "text-[#FEFAE0]"}>
        Enquire Now
      </h3>
    </div>
  );
}
