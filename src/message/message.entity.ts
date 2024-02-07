import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'messages' })
export class MessageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  conversationId: number;

  @Column()
  content: string; // What about images or files attached?

  @Column()
  senderName: string; // Maybe it is better to create a sender property and then join tables? If so, the next property gets useless.

  @Column()
  sendingParty: string; // Should I create ENUM here?

  @Column()
  createdAt: Date;
}

// id
// conversation_id
// timestamp		2024-02-05 15:34:24
// content		"Hello! We would need our prices changed."
// sender_name		"Kalle", "CityPörssi"
// sending_party		0 = client, 1 = admin
