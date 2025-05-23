import { render, screen } from '@testing-library/react';

import { ContextMenu, MenuItem } from '../../index';

describe('ContextMenu component tests', function() {
    test('component renders without crashing', () => {
        const {container} = render(<ContextMenu opactiy="90" color="#333" showMenu={true}><MenuItem>Hello World!</MenuItem></ContextMenu>);
        expect(container.querySelector('.menu-item-button')).toHaveTextContent('Hello World!');
    })
});