import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'web-component-stencil',
  styleUrl: 'web-component-stencil.css',
  shadow: true,
})
export class WebComponentStencil {
  @Prop() name: string;
  @Event({ eventName: 'button-clicked' }) buttonClicked: EventEmitter<string>;

  render() {
    return (
      <div>
        <h1>Hello from Stencil, {this.name}!</h1>
        <button onClick={() => this._handleClick()}>Click Me!</button>
        <slot />
      </div>
    );
  }

  private _handleClick() {
    this.buttonClicked.emit('Hello from Stencil!');
  }
}
