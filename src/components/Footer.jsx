import bgImage from "../assets/texture.jpg";
import locationPin from "../assets/location-pin.png";
export default function Footer() {
  return (
    <>
      <footer
        style={{ backgroundImage: `url(${bgImage})` }}
        className={`absolute bottom-0 bg-[#BC6C25] h-72 w-screen px-20 py-8 bg-cover bg-blend-multiply text-[#FEFAE0] `}
      >
        <div className="flex gap-[40vw]">
          <div className="">
            <div></div>
            <div>OM PLYWOODS</div>
          </div>
          <div className="flex">
            <div>
              <img src={locationPin} alt="" className="h-5 w-5" />
            </div>{" "}
            <p>
              22-11-22/A Pollavani Gunta, Renigunta road, near Royal Enfiels
              showroom, Tirupati 517501
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
