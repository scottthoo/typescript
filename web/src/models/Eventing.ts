type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};
  // events is an object that hv arrays of keys that return an arrays of callbacks

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || []; // like this handlers Guaranteed will be an array
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) return;
    handlers.forEach((callback) => {
      callback();
    });
  };
}
