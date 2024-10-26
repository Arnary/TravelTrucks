export default function Capitalize(value) {
    const separated = value?.replace(/([a-z])([A-Z])/, '$1 $2');
    return separated?.charAt(0).toUpperCase() + separated?.slice(1)    
};
