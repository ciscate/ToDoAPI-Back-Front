package com.ciscate.todoapp.service;

import com.ciscate.todoapp.dto.TaskInDTO;
import com.ciscate.todoapp.exceptions.ToDoExceptions;
import com.ciscate.todoapp.mapper.TaskInDTOToTask;
import com.ciscate.todoapp.persistence.entity.Task;
import com.ciscate.todoapp.persistence.entity.TaskStatus;
import com.ciscate.todoapp.persistence.repository.TaskRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    private final TaskRepository repository;
    private final TaskInDTOToTask mapper;

    public TaskService(TaskRepository taskRepository, TaskInDTOToTask mapper) {
        this.repository = taskRepository;
        this.mapper = mapper;
    }

    public Task createTask(TaskInDTO taskInDTO){
        Task task = mapper.map(taskInDTO);
        return this.repository.save(task);
    }


    @Transactional
    public void updateTaskAsFinished(Long id){
        Optional<Task> optionalTask = this.repository.findById(id);
        if(optionalTask.isEmpty()){
            throw new ToDoExceptions("Task not found", HttpStatus.NOT_FOUND);
        }

        this.repository.markTaskAsFinished(id);
    }


    public List<Task> getAll(){
        return this.repository.findAll();
    }

    public List<Task> getAllByStatus(TaskStatus status){
        return this.repository.findAllByTaskStatus(status);
    }



    public void deleteById(long id){
        Optional<Task> optionalTask = this.repository.findById(id);
        if(optionalTask.isEmpty()){
            throw new ToDoExceptions("Task not found", HttpStatus.NOT_FOUND);
        }

        this.repository.deleteById(id);
    }


}
