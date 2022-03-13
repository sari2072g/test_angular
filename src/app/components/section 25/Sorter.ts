import { CharactersCollection } from "./annotation/CharactersCollection";
import { LinkedList } from "./annotation/LinkedList";
import { numbersCollection } from "./annotation/numbersCollection";


interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}
export abstract class Sorter {

    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract length: number;

    sort(): void {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if(this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
const numberCollection = new numbersCollection([1, 2, 3, -2, 4]);
numberCollection.sort();

const charactersCollection = new CharactersCollection('Xaabty');
charactersCollection.sort();

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(50);
linkedList.add(-5);
linkedList.add(-10);
linkedList.add(800);

linkedList.sort();
linkedList.print();
