package com.java.web_travel.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class BookingController {
    @RequestMapping(value = "booking" , method = RequestMethod.GET)
    public ModelAndView booking() {
        ModelAndView mav = new ModelAndView("booking");
        return mav ;
    }
    @RequestMapping(value = "home" , method = RequestMethod.GET)
    public ModelAndView home() {
        ModelAndView mav = new ModelAndView("home");
        return mav ;
    }
}
