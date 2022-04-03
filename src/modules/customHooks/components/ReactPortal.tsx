import { createPortal } from 'react-dom';
import { createWrapperAndAppendToBody } from '../utils/functions';

const ReactPortal = ({ children, wrapperId = "root" }: {children: any, wrapperId?: string}) => {
    let element = document.getElementById(wrapperId);

    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
    }
  
    return createPortal(children, element);
}

export default ReactPortal;