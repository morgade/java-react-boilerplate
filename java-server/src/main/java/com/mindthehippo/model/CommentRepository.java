package com.mindthehippo.model;

/**
 *
 * @author x4rb
 */
public interface CommentRepository {
    Iterable<Comment> findAll();
    Comment save(Comment comment);
    void remove(String commentId);
}
