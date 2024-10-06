package com.java.web_travel.service;

import com.java.web_travel.entity.Booking;
import com.java.web_travel.model.BookingRequest;
import com.java.web_travel.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;
    public void createBooking(BookingRequest bookingRequest){
        Booking booking = new Booking();
        booking.setPalaceName(bookingRequest.getPalaceName());
        booking.setNumberOfPeople(bookingRequest.getNumberOfPeople());
        booking.setCheckinTime(bookingRequest.getCheckinTime());
        booking.setCheckoutTime(bookingRequest.getCheckoutTime());
        booking.setHotel(bookingRequest.getHotel());
        bookingRepository.save(booking);
    }
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
}
