let counter = 0;

function S(mark) {
    return typeof window.Symbol === 'function' ?
        window.Symbol(mark) :
        `${mark}-${new Date().getTime()}-${counter}-symbol`;
}

export const stepsComponentSymbol = S('StepsComponent');
export const stepsItemComponentSymbol = S('StepsItemComponent');