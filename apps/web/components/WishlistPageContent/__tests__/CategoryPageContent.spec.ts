import { mount } from '@vue/test-utils';
import { CategoryPageContent } from '#components';
import { CategoryMock } from '../../../__tests__/__mocks__/category.mock';

describe('<CategoryPageContent />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(CategoryPageContent, {
      props: {
        title: 'title',
        totalProducts: 0,
        products: [],
        itemsPerPage: 24,
        category: CategoryMock,
      },
    });

    expect(getByTestId('category-page-content'));
  });
});
