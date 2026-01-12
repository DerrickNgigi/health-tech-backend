import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
}

@Entity()
export class Task {
  @ApiProperty({ example: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'Update Patient Records' })
  @Column()
  title: string;

  @ApiProperty({ example: 'Verify insurance details and update allergy history for Patient' })
  @Column()
  description: string;

  @ApiProperty({ enum: TaskStatus, example: TaskStatus.PENDING })
  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.PENDING,
  })
  status: TaskStatus;

  @ApiProperty()
  @CreateDateColumn()
  create_date: Date;

  @ApiProperty({ example: '2026-02-15T14:30:00Z' })
  @Column({ type: 'timestamp', nullable: true })
  due_date: Date;
}