import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../entities/task.entity';

export class CreateTaskDto {
  @ApiProperty({ 
    description: 'The title of the task', 
    example: 'Sanitize ICU Equipment' 
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ 
    description: 'Detailed description', 
    example: 'Perform sterilization cycle for Ventilators A and B in Ward 3' 
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ 
    enum: TaskStatus, 
    example: TaskStatus.PENDING, 
    required: false,
    description: 'The initial status of the task'
  })
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @ApiProperty({ 
    required: false, 
    example: '2026-01-20T09:00:00Z' 
  })
  @IsOptional()
  due_date?: string;
}