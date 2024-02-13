export const formatNumber =  (number) => {
    
    return number.toLocaleString('es-CL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};