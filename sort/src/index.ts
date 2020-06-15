import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 2, 4, 6, 12, 44]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charCollection = new CharactersCollection('Ox123XYbbZaa');
charCollection.sort();
console.log(charCollection.data);

const linkList = new LinkedList();
linkList.add(3030);
linkList.add(2);
linkList.add(41);
linkList.add(3241);
linkList.add(-123);
// linkList.print();
linkList.sort();

linkList.print();
