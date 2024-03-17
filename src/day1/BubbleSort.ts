export default function bubble_sort(arr: number[]): void {
    //its the O(n^2) which is following the rule of (n + 1) * n/2 which is modified to be used in bubble sorting
    for( let i = 0 ; i < arr.length ; i++) {
        for (let j = 0 ; j < arr.length - 1 - i ; j++) {
            if(arr[j] > arr[j + 1]) {
                //what just happens here is that it checks the index if arr and compare it to the next index (j + 1) and if it is smaller
                //then it keeps that index which is currently in and them swap the numbers and set the next index (j + 1) to the current index (j)
                //which was detected as greater number
                const temporaryHold = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1]= temporaryHold;
            }
        }
    }  
}