import { LabelHTMLAttributes } from 'react';

type Labelprops = LabelHTMLAttributes<HTMLLabelElement>;

export function Label(props: Labelprops) {
    return < label {...props } /> ;
        
}
