import Ranking from "@/Components/Ranking/Ranking";
import { ParticlesBackground } from "../Components/ParticleBg/ParticlesBackground";
import "./page.css";

export default function Home() {
  return (
    <div className="Main">
      <ParticlesBackground />
      <div className="absolute bg-gradient-to-b from-black via-black to-neutral-900 w-full h-[50%]"></div>
      <div className="Slogan">Aqui va el Slogan</div>
      <div className="slide-info-1">
        <div className="card1-container">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="card1">
            <div className="card-header">
              <div className="img"></div>
              <h2>Titulo</h2>
            </div>
            <div className="card-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              magni distinctio unde odit voluptate perferendis reprehenderit
              eaque, rerum doloremque veritatis consequuntur recusandae quam
              vero architecto possimus officiis tenetur voluptatum voluptates.
            </div>
          </div>
        </div>
        <div className="card2-container">
          <div className="circle2"></div>
          <div className="circle2"></div>
          <div className="card2">
            <div className="card-header">
              <div className="img"></div>
              <h2>Titulo</h2>
            </div>
            <div className="card-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              corporis nemo animi, distinctio laborum ullam suscipit quia
              debitis quos inventore est iusto, veritatis eos harum aut ipsa
              itaque accusantium repudiandae?
            </div>
          </div>
        </div>
      </div>
      <div className="ranking-info">
        <div className="example-editor">
        </div>
        <div className="ranking-ranges">
            <Ranking/>
        </div>
      </div>
      <div className="slide-info-2">Aqui va info 2</div>
    </div>
  );
}
