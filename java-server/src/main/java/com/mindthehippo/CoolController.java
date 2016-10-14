package com.mindthehippo;

import com.mindthehippo.model.Comment;
import com.mindthehippo.model.CommentRepository;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Marcelo
 */
@RestController
public class CoolController {
    @Autowired
    private CommentRepository commentRepository;
    
    @RequestMapping("/heap")
    public Map heap() {
        return new HashMap() {{
            put("max", Runtime.getRuntime().maxMemory());
            put("free", Runtime.getRuntime().freeMemory());
        }};
    }
    
    @RequestMapping(value = "/comment", method = RequestMethod.POST)
    public void postComment(@RequestBody Comment comment) {
        commentRepository.save(comment);
    }
    
    @RequestMapping(value = "/comment", method = RequestMethod.GET)
    public Iterable<Comment> getComments() {
        return commentRepository.findAll();
    }
}
