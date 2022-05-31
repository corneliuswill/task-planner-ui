import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Notification from './notification';

describe('<Notification/>', () => {
    it('component renders correctly', () => {
        const wrapper = shallow(<Notification />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render text message correctly', () => {
        const message = "Hello World!";
        const wrapper = shallow(<Notification message={message}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('finds class', () => {
        const wrapper = shallow(<Notification message='Hello World!'/>);
        const element  = wrapper.find('.message');
        expect(element.text()).toContain('Hello World!');
    });
});