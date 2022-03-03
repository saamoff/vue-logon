import TextContent from '@/components/textContent/index.vue';
import {shallowMount} from '@vue/test-utils';

describe('PUBLIC', () => {
  it('TESTE 01', () => {
    const wrapper = shallowMount(TextContent);
    expect(wrapper.contains('p')).toBe(true);
  });
});