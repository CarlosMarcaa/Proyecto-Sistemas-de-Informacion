import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Boton_Property1Default } from './Boton_Property1Default/Boton_Property1Default';
import classes from './Home.module.css';
import { LogoBarrasNuevas } from './LogoBarrasNuevas/LogoBarrasNuevas';
import { Menu } from './Menu/Menu';
import { Rectangle8Icon } from './Rectangle8Icon.js';
import { Rectangle9Icon } from './Rectangle9Icon.js';
import { Rectangle10Icon } from './Rectangle10Icon.js';
import { Rectangle11Icon } from './Rectangle11Icon.js';
import { Rectangle12Icon } from './Rectangle12Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 293:1186 */
export const Home: FC<Props> = memo(function Home(props = {}) {
  return (
      <div className={`${resets.storybrainResets} ${classes.root}`} >
        <div className={classes.frame32}>
          <div className={classes.mision}>
            <div className={classes.crearUnEspacioAccesibleParaLos}>
              Crear un espacio accesible para los estudiantes, que sirva para difundir información sobre agrupaciones
              estudiantiles y fomente la participación en actividades que desarrollen habilidades blandas.
            </div>
            <div className={classes.mision2}>Misión</div>
          </div>
          <LogoBarrasNuevas
            className={classes.logoBarrasNuevas}
            classes={{
              rectangle10: classes.rectangle10,
              rectangle12: classes.rectangle12,
              rectangle11: classes.rectangle11,
            }}
            swap={{
              rectangle8: <Rectangle8Icon className={classes.icon} />,
              rectangle10: (
                <div className={classes.rectangle10}>
                  <Rectangle10Icon className={classes.icon2} />
                </div>
              ),
              rectangle12: (
                <div className={classes.rectangle12}>
                  <Rectangle12Icon className={classes.icon3} />
                </div>
              ),
              rectangle11: (
                <div className={classes.rectangle11}>
                  <Rectangle11Icon className={classes.icon4} />
                </div>
              ),
              rectangle9: <Rectangle9Icon className={classes.icon5} />,
            }}
          />
          <div className={classes.vision}>
            <div className={classes.establecerUnaPlataformaDeConex}>
              Establecer una plataforma de conexión entre estudiantes para enriquecer la experiencia universitaria,
              promoviendo la interacción y el apoyo mutuo más allá del ámbito académico.
            </div>
            <div className={classes.vision2}>Visión</div>
          </div>
        </div>
        <div className={classes.rectangle51}></div>
        <div className={classes.estaAppNaceEnVistaALaDificulta}>
          Esta App nace en vista a la dificultad que posee la Universidad Metropolitana para promocionar actividades
          extracurriculares debido a sus métodos de difusión limitados y falta de accesibilidad a la información, lo que
          impide la captación efectiva de nuevos estudiantes para estas actividades.
        </div>
        <Boton_Property1Default
          className={classes.boton2}
          text={{
            boton: <div className={classes.boton}>Buscar Grupo</div>,
          }}
        />
        <div className={classes.buscaElGrupoOSeleccionQueMasSe}>
          Busca el grupo o selección que más se adapte a ti y postulate
        </div>
        <div className={classes.conoceYConecta}>Conoce y conecta </div>
        <div className={classes.oRNELLADELAROSA4Scaled1}></div>
        <div className={classes.pexelsStefanLorentz6681371}></div>
        <div className={classes.photo_5028280555057294662_y1}></div>
        <div className={classes.pexelsOladimejiAjegbile2861798}></div>
        <div className={classes.pexelsIvanSamkov56766781}></div>
        <div className={classes.photo_5028280555057294663_y1}></div>
        <div className={classes.pexelsBrettSayles14152681}></div>
        <Menu className={classes.menu} />
      </div>
  );
});

export default Home