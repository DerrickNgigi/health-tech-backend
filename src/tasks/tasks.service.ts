import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  // POST /api/tasks
  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.tasksRepository.create({
      ...createTaskDto,
      due_date: createTaskDto.due_date ? new Date(createTaskDto.due_date) : undefined,
    });
    
    return await this.tasksRepository.save(task);
  }

  // GET /api/tasks
  async findAll(): Promise<Task[]> {
    return await this.tasksRepository.find();
  }

  // GET /api/tasks/:id
  async findOne(id: string): Promise<Task> {
    const task = await this.tasksRepository.findOne({ where: { id } });
    if (!task) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    
    return task;
  }

  // PUT /api/tasks/:id
  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    // Check if task exists first
    const task = await this.findOne(id); 

    // Handle date conversion for updates as well
    const updatedFields = {
        ...updateTaskDto,
        due_date: updateTaskDto.due_date ? new Date(updateTaskDto.due_date) : task.due_date
    };

    // Merge new values into the existing task entity
    this.tasksRepository.merge(task, updatedFields);
    return await this.tasksRepository.save(task);
  }

  // DELETE /api/tasks/:id
  async remove(id: string): Promise<void> {
    const result = await this.tasksRepository.delete(id);
    
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }
}