import { User} from './user';

export class Topic {
  constructor(
    public author: User,
    public id: number,
    public title: string,
    public description: string,

  ) {}

}
