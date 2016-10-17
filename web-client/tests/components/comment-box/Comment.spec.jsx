import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import Comment from '../../../src/client/app/components/comment-box/Comment.jsx';

import {shallow} from 'enzyme';

describe('Comment component', function () {
    
    it('should render props as expected', () => {
        const comment = shallow(
          <Comment name="Marcelo" value="This is a test comment" />
        );

        expect(comment.type()).toEqual(ListGroupItem);
//        expect(comment.childAt(0).type()).toEqual(ControlLabel);
//        expect(comment.childAt(0).children().text()).toEqual('Marcelo');
//        expect(comment.childAt(1).type()).toEqual(FormControl.Static);
//        expect(comment.childAt(1).children().text()).toEqual('This is a test comment');
    });

});