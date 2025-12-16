import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function TeamList({ workTeam }) {
  return (
    <section className="pb-20" id="team">
      <div className="mx-auto px-7.5">
        <div className="mx-auto mb-15">
          <h2 className="text-5xl font-semibold capitalize leading-14 font-[Saira]">
            conoce a los intructores
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-7.5">
          {workTeam.map((workMember) => {
            return (
              <div className="team-item" key={workMember.id}>
                <div className="relative overflow-hidden">
                  <img
                    className="origin-top transition-transform duration-500 hover:transform-[scale(1.1)]"
                    src={workMember.picture}
                    alt="img"
                  />
                  <div className="absolute bottom-7.5 left-7.5 right-7.5 text-center bg-red-950 p-3.75 transform-[translateY(20px)] opacity-0 transition-transform duration-500 hover:transform-[translateY(0px)] hover:opacity-100">
                    <h3 className="text-2xl font-semibold text-white capitalize">
                      {workMember.name}
                    </h3>
                    <p className="text-white capitalize">
                      {workMember.classSubject}
                    </p>
                  </div>
                </div>
                <div className="text-center mt-2.5">
                  <a
                    className="text-2xl rounded-[50%] text-red-950 hover:text-white hover:bg-red-950"
                    href={workMember.socialMediaInfo.instagram}
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
