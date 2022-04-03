export const extractNestedValue = (object: any, nestedKeys: string) => {
    return nestedKeys.split('.').reduce((obj, key) => obj[key], object)
}

export const createWrapperAndAppendToBody = (wrapperId: string): HTMLElement => {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);

    return wrapperElement;
}