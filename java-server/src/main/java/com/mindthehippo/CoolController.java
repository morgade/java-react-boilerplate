package com.mindthehippo;

import java.util.HashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Marcelo
 */
@RestController
public class CoolController {
    @RequestMapping("/heap")
    public Map heap() {
        return new HashMap() {{
            put("max", Runtime.getRuntime().maxMemory());
            put("free", Runtime.getRuntime().freeMemory());
        }};
    }
}
