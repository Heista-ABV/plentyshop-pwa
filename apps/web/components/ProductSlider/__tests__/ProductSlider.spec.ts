import { mount } from '@vue/test-utils';
import { ProductSlider } from '#components';

describe('<ProductSlider />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(ProductSlider, {
      props: {
        items: [],
        maxItemCount: 4,
      },
    });

    expect(getByTestId('product-slider'));
  });
});
