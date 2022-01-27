import { newSpecPage } from '@stencil/core/testing';
import { WebComponentStencil } from './web-component-stencil';

describe('web-component-stencil', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [WebComponentStencil],
      html: '<web-component-stencil name="Gary"></web-component-stencil>',
    });
    expect(root).toEqualHtml(`
      <web-component-stencil name="Gary">
        <mock:shadow-root>
          <div>
            <h1>Hello from Stencil, Gary!</h1>
            <button>Click Me!</button>
            <slot></slot>
          </div>
        </mock:shadow-root>
      </web-component-stencil>
    `);
  });
});
