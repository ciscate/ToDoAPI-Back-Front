package com.ciscate.todoapp.persistence.entity;

import lombok.Data;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "task")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id",nullable = false)
    private Long id;

    @Column(name = "title",nullable = false)
    private String title;

    @Column(name = "description",nullable = false)
    private String description;

    @Column(name = "created_date",nullable = false)
    private LocalDateTime createdDate;

    @Column(name = "eta",nullable = false)
    private LocalDateTime eta;

    @Column(name = "finished",nullable = false)
    private boolean finished;

    @Column(name = "task_status",nullable = false)
    private TaskStatus taskStatus;
}
