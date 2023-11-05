import mongoose, { Document, Schema } from 'mongoose';

interface IGroup extends Document {
  name: string;
  description: string;
  members: mongoose.Types.ObjectId[];
}

interface IChatMessage extends Document {
  text: string;
  image: string;
  group: mongoose.Types.ObjectId;
  author: mongoose.Types.ObjectId;
}

interface IThread extends Document {
  parentMessage: mongoose.Types.ObjectId;
  replies: mongoose.Types.ObjectId[];
}

interface IReply extends Document {
  text: string;
  image: string;
  author: mongoose.Types.ObjectId;
}

const groupSchema = new Schema<IGroup>({
  name: String,
  description: String,
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const chatMessageSchema = new Schema<IChatMessage>({
  text: String,
  image: String,
  group: { type: Schema.Types.ObjectId, ref: 'Group' },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
});

const threadSchema = new Schema<IThread>({
  parentMessage: { type: Schema.Types.ObjectId, ref: 'ChatMessage' },
  replies: [{ type: Schema.Types.ObjectId, ref: 'Reply' }],
});

const replySchema = new Schema<IReply>({
  text: String,
  image: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
});

export const Group = mongoose.model<IGroup>('Group', groupSchema);
export const ChatMessage = mongoose.model<IChatMessage>(
  'ChatMessage',
  chatMessageSchema
);
export const Thread = mongoose.model<IThread>('Thread', threadSchema);
export const Reply = mongoose.model<IReply>('Reply', replySchema);
