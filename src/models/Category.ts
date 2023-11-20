import { v4 as uuidV4 } from "uuid";

class Category {
  private id?: string;
  private name: string;
  private description: string;
  private created_at: string;

  constructor(name?: string, description?: string, created_at?: string) {
    if (!this.id) {
      this.id = uuidV4();
    }

    if (name) this.name = name;
    if (description) this.description = description;
    if (created_at) this.created_at = created_at;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId(): string {
    return this.id;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setDescription(description: string) {
    this.description = description;
  }

  public getDescription(): string {
    return this.description;
  }

  public setCreatedAt(created_at: string) {
    this.created_at = created_at;
  }

  public getCreatedAt(): string {
    return this.created_at;
  }
}

export { Category };
