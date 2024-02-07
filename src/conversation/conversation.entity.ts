import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'conversations' })
export class ConversationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerUid: string;

  @Column()
  userId: number;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  categoryCode: string; // should it be a number or a string with the exact name of the category?

  @Column()
  private: boolean;

  @Column()
  startedDatetime: Date;

  @Column()
  endedDatetime: Date; // do we really need this property?
}

// id
// customer_uid		"zellr__dresscue", "kirpparikalle__cityporssi"
// user_id		null, 123, 456
// name			"Dresscue", "CityPörssi"
// title			"Need help editing our pricing"
// category_code	(indicates what the predefined matter was that the client selected when starting the conversation)
// private			0 / 1 (true or false)
// started_datetime
// ended_datetime
