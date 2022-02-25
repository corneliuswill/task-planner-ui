import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Notification from './notification';

describe('<Notification/>', () => {
    it('component renders correctly', () => {
        const wrapper = shallow(<Notification message='Hello World!'/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});