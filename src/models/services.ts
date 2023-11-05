import { model, Schema } from 'mongoose';

export interface IService {
  Category:
    | 'Day Care'
    | 'Indoor Games'
    | 'Outdoor Games'
    | 'Special Tuitions'
    | 'Special Activities'
    | 'Summer Camp';
  ServiceName: string;
  AcademicYear: string;
  Providers: string;
  isPaid: 'Paid' | 'Unpaid';
  paidBy: string;
}

export interface IAmount {
  OneTime: number;
  Weekly: number;
  BiWeeks: number;
  TriWeeks: number;
  Monthly: number;
  Days45: number;
  BiMonthly: number;
  Quarterly: number;
  InstallmentWise: number;
  HalfYearly: number;
  Yearly: number;
}

export interface IServiceFeePlan {
  PlanName: string;
  SubscriberTypes: string;
  ApplicationPlanDate: Date;
  ProviderName: string;
  Location: string;
  FeeAccountName: string;
  Amount: IAmount;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface IRole {
  name: string;
  permissions: string[];
}

const ServiceSchema = new Schema<IService>(
  {
    Category: {
      type: 'String',
      required: true,
      enum: [
        'Day Care',
        'Indoor Games',
        'Outdoor Games',
        'Special Tuitions',
        'Special Activities',
        'Summer Camp',
      ],
    },
    ServiceName: { type: 'String', required: true },
    AcademicYear: { type: 'String', required: true },
    Providers: { type: 'String', required: true },
    isPaid: {
      type: 'String',
      required: true,
      enum: ['Paid', 'Unpaid'],
    },
    paidBy: { type: 'String', required: false },
  },
  { timestamps: true }
);

export const AmountSchema = new Schema<IAmount>(
  {
    OneTime: { type: 'Number', required: true },
    Weekly: { type: 'Number', required: true },
    BiWeeks: { type: 'Number', required: true },
    TriWeeks: { type: 'Number', required: true },
    Monthly: { type: 'Number', required: true },
    Days45: { type: 'Number', required: true },
    BiMonthly: { type: 'Number', required: true },
    Quarterly: { type: 'Number', required: true },
    InstallmentWise: { type: 'Number', required: true },
    HalfYearly: { type: 'Number', required: true },
    Yearly: { type: 'Number', required: true },
  },
  { timestamps: true }
);

export const ServiceFeePlanSchema = new Schema<IServiceFeePlan>(
  {
    PlanName: { type: 'String', required: true },
    SubscriberTypes: { type: 'String', required: true },
    ApplicationPlanDate: { type: 'Date', required: true },
    ProviderName: { type: 'String', required: true },
    Location: { type: 'String', required: true },
    FeeAccountName: { type: 'String', required: true },
    Amount: { type: AmountSchema, required: true },
  },
  { timestamps: true }
);

const roleSchema = new Schema<IRole>({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  permissions: {
    type: [String],
    required: true,
    trim: true,
  },
});

const userSchema = new Schema<IUser>(
  {
    name: {
      type: 'String',
      required: true,
      trim: true,
    },
    email: {
      type: 'String',
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: 'String',
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = model<IUser>('User', userSchema);

export const Role = model<IRole>('Role', roleSchema);

export const ServiceFeePlan = model<IServiceFeePlan>(
  'ServiceFeePlan',
  ServiceFeePlanSchema
);

export const Service = model<IService>('Service', ServiceSchema);
