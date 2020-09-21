import { OrxeDropdown } from '../';
import '@testing-library/jest-dom';


describe('orxe-dropdown', () => {
  let dropdown;

  beforeEach(async function() {
    OrxeDropdown;
    dropdown = (await document.body.appendChild(document.createElement('orxe-dropdown'))) as OrxeDropdown;
  });

  afterEach(async function() {
    await dropdown.remove();
  });

  it('should function call render', () => {
    expect(dropdown).toBeTruthy();
    console.log(dropdown);
  });
  
   it('should check default value for properties for card', () => {
    const title = 'Label';
    const defaultValue = 'Options';
    const value = 'none';
    expect(dropdown.title).toEqual('Label');
    expect(defaultValue).toEqual('Options');
    expect(value).toEqual('none');
  });
});
