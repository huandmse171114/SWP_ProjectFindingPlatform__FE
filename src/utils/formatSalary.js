export default function format(salary) {
    return String(salary).replace(/(.)(?=(\d{3})+$)/g,'$1,') + " VND"
}