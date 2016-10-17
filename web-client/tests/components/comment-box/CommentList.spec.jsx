/* global expect */

import React from 'react';
import {ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import Comment from '../../../src/client/app/components/comment-box/Comment.jsx';
import CommentList from '../../../src/client/app/components/comment-box/CommentList.jsx';

import {shallow} from 'enzyme';

describe('CommentList component', function () {
    
    it('should render empty comments as expected', () => {
        const comments = [];
        const comment = shallow(
          <CommentList comments={comments} />
        );

        expect(comment.is("div")).toBeTruthy();
        expect(comment.children().length).toEqual(0);
    });
    
    
    it('should render two comments as expected', () => {
        const comments = [
            {id:1, name:'Marcelo', text:'This is a test'},
            {id:2, name:'João', text:'This is another test'}
        ];
        const comment = shallow(
          <CommentList comments={comments} />
        );

        expect(comment.is("div")).toBeTruthy();
        expect(comment.children().length).toEqual(2);
        expect(comment.childAt(0).type()).toEqual(Comment);
        expect(comment.childAt(0).matchesElement(
                (<Comment key="1" name="Marcelo" text="This is a test" />)
            )).toBeTruthy();
    });

});