import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './LogoBarrasNuevas.module.css';
import { Rectangle8Icon } from './Rectangle8Icon.js';
import { Rectangle9Icon } from './Rectangle9Icon.js';
import { Rectangle10Icon } from './Rectangle10Icon.js';
import { Rectangle11Icon } from './Rectangle11Icon.js';
import { Rectangle12Icon } from './Rectangle12Icon.js';

interface Props {
  className?: string;
  classes?: {
    rectangle10?: string;
    rectangle12?: string;
    rectangle11?: string;
    root?: string;
  };
  swap?: {
    rectangle8?: ReactNode;
    rectangle10?: ReactNode;
    rectangle12?: ReactNode;
    rectangle11?: ReactNode;
    rectangle9?: ReactNode;
  };
}
/* @figmaId 53:292 */
export const LogoBarrasNuevas: FC<Props> = memo(function LogoBarrasNuevas(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle8}>{props.swap?.rectangle8 || <Rectangle8Icon className={classes.icon} />}</div>
      <div className={`${props.classes?.rectangle10 || ''} ${classes.rectangle10}`}>
        {props.swap?.rectangle10 || <Rectangle10Icon className={classes.icon2} />}
      </div>
      <div className={`${props.classes?.rectangle12 || ''} ${classes.rectangle12}`}>
        {props.swap?.rectangle12 || <Rectangle12Icon className={classes.icon3} />}
      </div>
      <div className={`${props.classes?.rectangle11 || ''} ${classes.rectangle11}`}>
        {props.swap?.rectangle11 || <Rectangle11Icon className={classes.icon4} />}
      </div>
      <div className={classes.rectangle9}>{props.swap?.rectangle9 || <Rectangle9Icon className={classes.icon5} />}</div>
    </div>
  );
});
