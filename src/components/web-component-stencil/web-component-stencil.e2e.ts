import { newE2EPage } from '@stencil/core/testing';

describe('web-component-stencil', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<web-component-stencil></web-component-stencil>');
    const element = await page.find('web-component-stencil');
    expect(element).toHaveClass('hydrated');
  });
});
