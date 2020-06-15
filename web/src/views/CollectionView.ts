import { Collection } from '../models/Collection';

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public colleciton: Collection<T, K>) {}

  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');

    for (let model of this.colleciton.models) {
      const itemParent = document.createElement('div');
      this.renderItem(model, itemParent);

      templateElement.content.append(itemParent);
    }

    this.parent.append(templateElement.content);
  }
}
