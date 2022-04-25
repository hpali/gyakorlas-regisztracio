export class Idea {
  id: string;
  name: string;
  description: string;
  votes: number;


  constructor(id: string, name: string, description: string, votes: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.votes = votes;
  }
}
