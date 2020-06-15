class SorterOld {
  constructor(public collection: number[] | string) {}

  public sort(): void {
    const { length } = this.collection;
    console.log(this.collection);
    console.log('Sorting... beep beep..');

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // If the collection is numbers

        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }
        // If the collection is string
        if (typeof this.collection === 'string') {
        }
      }
    }
    console.log('Done!');

    console.log(this.collection);
  }
}
