import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Boton_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    boton?: ReactNode;
  };
}
/* @figmaId 49:263 */
export const Boton_Property1Default: FC<Props> = memo(function Boton_Property1Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.boton != null ? props.text?.boton : <div className={classes.boton}>Botón</div>}
    </div>
  );
});
