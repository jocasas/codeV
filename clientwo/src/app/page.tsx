import { ParticlesBackground } from "../components/ParticleBg/ParticlesBackground";
import "./page.css";
import "./styles.css"; // Import the CSS file
import Link from 'next/link'

export default function Home() {
  return (
    <div className="Main">
      <ParticlesBackground />
      <div className="absolute bg-gradient-to-b from-black via-black to-neutral-900 w-full h-[50%]"></div>
      <div className="Slogan">Formando Gente Generando Competencia</div>
      <div className='text-center'>          
          <Link href="/login" className="button101" role="button">
            Log In
          </Link>
          <Link href="/register" className="button102">
            Sign In
          </Link>
      </div>
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
          <h3>Pruebalo!</h3>
        </div>
        <div className="ranking-ranges">
          <div className="card-content">
            aqui va el ranking quiza o algo asi
          </div>
        </div>
      </div>
      <div className="slide-info-2">Aqui va info 2</div>
    </div>
  );
}
