package com.ciscate.todoapp.controller;

import com.ciscate.todoapp.dto.TaskInDTO;
import com.ciscate.todoapp.persistence.entity.Task;
import com.ciscate.todoapp.persistence.entity.TaskStatus;
import com.ciscate.todoapp.service.TaskService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService){
        this.taskService = taskService;
    }


    @PostMapping
    public Task createTask(@RequestBody TaskInDTO taskInDTO){

        return this.taskService.createTask(taskInDTO);
    }



    @GetMapping
    public List<Task> getAll(){
        return this.taskService.getAll();
    }


    @GetMapping("/status/{status}")
    public List<Task> getAllByStatus(@PathVariable("status")TaskStatus status){
        return this.taskService.getAllByStatus(status);
    }


    @PatchMapping("/mark_as_finished/{id}")
    public ResponseEntity<Void> markAsFinished(@PathVariable("id") Long id){
        this.taskService.updateTaskAsFinished(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable("id")Long id){
        this.taskService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
