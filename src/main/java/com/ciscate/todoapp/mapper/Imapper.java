package com.ciscate.todoapp.mapper;

public interface Imapper <I , O>{

   public O map(I in);
}
