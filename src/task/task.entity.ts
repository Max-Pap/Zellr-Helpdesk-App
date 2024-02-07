import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tasks' })
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  conversationId: number | null;

  @Column()
  title: string;

  @Column()
  duration: string;

  @Column()
  fee: string;

  @Column()
  estimatedCompletion: string;

  @Column()
  deadline: Date;

  @Column()
  queueIndex: Date; // Need some details on that property.

  // Also, I think there should be a property which indicates the status of the task. Like the following one:

  @Column()
  status: 'Initiated' | 'In progress' | 'On review' | 'Done';
}

// id
// conversation_id		null, 123 (tasks can also be added without a reference to a conversation)
// title				"Editing prices"
// duration			"20 minutes"
// fee				"30 €"
// estimated_completion	"1-2 business days"
// deadline			"March 1st"
// queue_index
