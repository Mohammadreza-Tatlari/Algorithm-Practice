export default function bs_list(haystack: number[], needle: number): boolean {

    let low = 0;
    let high = haystack.length;

    do {
        const middle = Math.floor(low + (high - low) / 2);
        const vortex = haystack[middle];

        if (vortex === needle) {
            return true
        } else if (vortex < needle) {
            low = middle + 1;
        } else { //vortex is bigger than the number we are looking
            high = middle;
        }
    } while (low < high);
    return false;
}