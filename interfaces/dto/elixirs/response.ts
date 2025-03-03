export interface IElixirs {
  id: string;
  name: string;
  effect: string;
  sideEffects: string;
  characteristics: string;
  time: string;
  difficulty: unknown;
  ingredients: [
    {
      id: string;
      name: string;
    }
  ];
  inventors: [
    {
      id: string;
      firstName: string;
      lastName: string;
    }
  ];
  manufacturer: string;
}
