export default function contryRevers(value) {
    return value?.split(',').reverse().join(', ');
};
