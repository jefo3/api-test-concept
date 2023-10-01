interface ICourse {
  name: string;
  duration: number;
  educator: string;
}

class CreateCouseService {
  execute({ duration, educator, name }: ICourse) {
    console.log(name, duration, educator);
  }
}

export { CreateCouseService };
