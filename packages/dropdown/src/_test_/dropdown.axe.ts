import { OrxeDropdown } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-dropdown-axe', () => {

  let dropdown;

  beforeEach(async () => {
    OrxeDropdown;
    document.body.appendChild(document.createElement('orxe-dropdown'));
    console.log(document)
    dropdown = document.querySelector('orxe-dropdown') as OrxeDropdown;
  });

  afterEach(() => {
    dropdown.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(dropdown);
    expect(result).toHaveNoViolations();
  });
});
